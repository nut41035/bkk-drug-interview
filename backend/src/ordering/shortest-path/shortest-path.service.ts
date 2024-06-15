import { Injectable, NotFoundException } from '@nestjs/common';
import * as PriorityQueue from 'js-priority-queue';
import { OrderDto, ShortestPathRequestDto } from './dto/shortestPathRequest.dto'
import { Logger } from '@nestjs/common';
import { pow, sqrt, evaluate, chain } from 'mathjs'
import { LocationsService } from '../../locations/locations.service';
import { DistancesService } from '../../distances/distances.service';
import { Locations, Pin } from '../../mongo/schemas/locations.schema';
import { Distances } from '../../mongo/schemas/distances.schema';
import { GoogleMapService } from '../google-map/google-map.service'

@Injectable()
export class ShortestPathService {
    constructor(
        private readonly locationsService: LocationsService,
        private readonly googleMapService: GoogleMapService,
        private readonly distancesService: DistancesService
        ) {}
    private readonly logger = new Logger(ShortestPathService.name);

    async listAllLocation(){
        return await this.locationsService.findAll();
    }

    async listAllDistances(stores, lon, lat){
        const map = new Map();
        // for pin to all store
        const fromPin = await this.googleMapService.getAllDistancePin({
            lon: lon,
            lat: lat,
            to: stores
        })
        for (const d of fromPin) {
            map.set(d.key, d.distance);
        }
        // for store to store
        const distances = await this.distancesService.findAll();
        for (const d of distances) {
            map.set(d.key, d.distance);
        }

        return map;
    }

    getDistance(distances, origin: string, destination: string){
        const key = `${origin}-${destination}`
        return distances.get(key);
    }

    async findShortestPath(request: ShortestPathRequestDto) {
        validateProduct(request.order);

        const stores = await this.listAllLocation();
        const distances = await this.listAllDistances(stores, request.currentLocation.lon, request.currentLocation.lat);
        this.logger.log(`distances populated`);

        const pq = new PriorityQueue({ comparator: (a, b) => a.distance - b.distance });

        pq.queue({ distance: 0, store: {site_id: "pin"}, products: request.order, path: [] });

        while (pq.length > 0) {
            const { distance, store, products, path } = pq.dequeue();
            if (products.length === 0) {
                return { path, distance };
            }
            for (const neighbor of stores) {
                if (!path.includes(neighbor.site_id)) {
                    const {newProductNeeded, fillSomething} = fillCart(products, neighbor)
                    this.logger.log(`newProductNeeded: ${newProductNeeded.length}  and filled sth: ${fillSomething}`);
                    if (fillSomething){
                        const newDistance = distance + await this.getDistance(distances, store.site_id, neighbor.site_id);
                        this.logger.log(`path ${path} ${neighbor.site_id}========> newDistance: ${newDistance}`);
                        pq.queue({
                            distance: newDistance,
                            store: neighbor,
                            products: newProductNeeded,
                            path: [...path, neighbor.site_desc]
                        });
                    }
                }
            }
        }

        return "Cannot fulfill order";
    }
}

function fillCart(productNeeded, store: Locations){
    var newProductNeeded: OrderDto[] = [];
    var fillSomething = false;
    productNeeded.forEach( item => {
        if (store[item.name] !== 0){
            fillSomething = true;
        }
        if (store[item.name] < item.quantity){
            const newProduct: OrderDto = new OrderDto();
            newProduct.name = item.name;
            newProduct.quantity = item.quantity - store[item.name];
            newProductNeeded.push(newProduct);
        }
    });
    return {newProductNeeded, fillSomething};
}

function validateProduct(product: OrderDto[]){
    const availableProduct = ["acerola_cherry_1000mg", "salmon_fish_1000mg"];
    product.forEach(i => {
        if (!availableProduct.includes(i.name)){
            throw new NotFoundException(`Sorry we do not have ${i.name}`)
        }
    })
}