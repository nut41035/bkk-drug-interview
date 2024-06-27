import { AbstractRepository } from "@app/common/database/abstract.repository";
import { Injectable, Logger } from "@nestjs/common";
import { Location } from "./entities/location.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class LocationRepository extends AbstractRepository<Location>{
    protected readonly logger = new Logger(LocationRepository.name);

    constructor(
        @InjectModel(Location.name) 
        locationModel: Model<Location>,
    ) {
        super(locationModel);
    }
}