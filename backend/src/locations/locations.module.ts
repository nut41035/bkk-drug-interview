import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LocationsService } from './locations.service';
import { Locations, LocationsSchema } from '../mongo/schemas/locations.schema';

@Module({
  controllers: [],
  providers: [LocationsService],
  imports: [
      MongooseModule.forFeature([{ name: Locations.name, schema: LocationsSchema }])
  ],
  exports: [LocationsModule, LocationsService],
})
export class LocationsModule {}
