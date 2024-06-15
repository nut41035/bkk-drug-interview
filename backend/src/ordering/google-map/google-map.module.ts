import { Module } from '@nestjs/common';
import { GoogleMapController } from './google-map.controller';
import { HttpModule } from '@nestjs/axios';
import { GoogleMapService } from './google-map.service';

@Module({
  imports: [HttpModule],
  controllers: [GoogleMapController],
  providers: [GoogleMapService],
  exports: [GoogleMapModule, GoogleMapService]
})
export class GoogleMapModule {}
