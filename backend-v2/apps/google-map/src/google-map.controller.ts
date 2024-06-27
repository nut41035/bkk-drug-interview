import { Controller, Get } from '@nestjs/common';
import { GoogleMapService } from './google-map.service';

@Controller()
export class GoogleMapController {
  constructor(private readonly googleMapService: GoogleMapService) {}

  @Get()
  getHello(): string {
    return this.googleMapService.getHello();
  }
}
