import { Injectable } from '@nestjs/common';
import { DistanceRequestDto } from './dto/distanceRequest.dto';
import { DistanceResponseDto, Data } from './dto/distanceResponse.dto';
import { Locations, Pin } from '../../mongo/schemas/locations.schema';
import { HttpService } from '@nestjs/axios';
import { Logger } from '@nestjs/common';

@Injectable()
export class GoogleMapService {
    constructor(private readonly httpService: HttpService) {}
    private readonly logger = new Logger(GoogleMapService.name);

    getDistance(request: DistanceRequestDto): Promise<number> {
        const path = process.env.GOOGLEMAP_DISTANCE_API_URL;
        const key = process.env.GOOGLEMAP_API_KEY;
        const url = `${path}?origins=${request.flat},${request.flon}&destinations=${request.tlat},${request.tlon}&key=${key}`

        return this.httpService.axiosRef
          .get(url)
          .then((res) => {
            return res.data.rows[0].elements[0].distance.value;
          })
          .catch((err) => {
            throw new Error(
              err?.message + ': ' + JSON.stringify(err?.response?.data),
            );
          });
        }

    async getAllDistance(request) {
        const distances = [];
        for (const from of request.locations) {
            for (const to of request.locations) {
                if (from.site_id !== to.site_id){
                    this.logger.log(`${from.site_id} - ${to.site_id}`);
                    const jsonStringFrom = JSON.stringify(from.location);
                    const pinObjectFrom: Pin = JSON.parse(jsonStringFrom) as Pin;
                    const jsonStringTo = JSON.stringify(to.location);
                    const pinObjectTo: Pin = JSON.parse(jsonStringTo) as Pin;

                    const distance = await this.getDistance({
                        flon: pinObjectFrom.coordinates[0],
                        flat: pinObjectFrom.coordinates[1],
                        tlon: pinObjectTo.coordinates[0],
                        tlat: pinObjectTo.coordinates[1]
                    });
                    distances.push({
                        key: `${from.site_id}-${to.site_id}`,
                        distance: distance
                    });
                }
            }
        }
        return distances;
    }

    async getAllDistancePin(request) {
        const distances = [];
        for (const to of request.to) {
            const jsonStringTo = JSON.stringify(to.location);
            const pinObjectTo: Pin = JSON.parse(jsonStringTo) as Pin;

            const distance = await this.getDistance({
                flon: request.lon,
                flat: request.lat,
                tlon: pinObjectTo.coordinates[0],
                tlat: pinObjectTo.coordinates[1]
            });
            distances.push({
                key: `pin-${to.site_id}`,
                distance: distance
            });
        }
        return distances;
    }
}