import { Module } from '@nestjs/common';
import { GoogleMapController } from './google-map.controller';
import { GoogleMapService } from './google-map.service';
import { DatabaseModule } from '@app/common';
import { LocationModule } from './location/location.module';

@Module({
  imports: [DatabaseModule, LocationModule],
  controllers: [GoogleMapController],
  providers: [GoogleMapService],
})
export class GoogleMapModule {}
