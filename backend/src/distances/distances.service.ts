import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Distances } from '../mongo/schemas/distances.schema';

@Injectable()
export class DistancesService {
    constructor(@InjectModel(Distances.name) private distancesModel: Model<Distances>) {}

    async findAll(): Promise<Distances[]> {
        return await this.distancesModel.find().exec();
    }
}
