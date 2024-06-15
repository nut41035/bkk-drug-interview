import { Controller, Post, Body } from '@nestjs/common';
import { DistanceRequestDto } from './dto/distanceRequest.dto';
import { DistanceResponseDto } from './dto/distanceResponse.dto';
import { Logger } from '@nestjs/common';
import { GoogleMapService } from './google-map.service';
import { Locations } from '../../mongo/schemas/locations.schema'

@Controller('google-map')
export class GoogleMapController {
    constructor(private readonly googleMapService: GoogleMapService) {}
    private readonly logger = new Logger(GoogleMapController.name);

    @Post('/distance')
    async getDistance(@Body() request: DistanceRequestDto): Promise<number> {
        return this.googleMapService.getDistance(request);
    }

    @Post('/seed')
    async getSeed(@Body() request: Locations[]){
        return this.googleMapService.getAllDistance(request);
    }

    @Post('/fromPin')
    async getDistancesFromPin(@Body() request){
        return this.googleMapService.getAllDistancePin(request);
    }
}
