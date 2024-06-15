import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Locations } from '../mongo/schemas/locations.schema';

@Injectable()
export class LocationsService {
    constructor(@InjectModel(Locations.name) private locationsModel: Model<Locations>) {}

    async findAll(): Promise<Locations[]> {
        return await this.locationsModel.find().exec();
    }
}
