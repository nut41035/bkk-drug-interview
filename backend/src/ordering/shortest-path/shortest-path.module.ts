import { Module } from '@nestjs/common';
import { ShortestPathService } from './shortest-path.service';
import { ShortestPathController } from './shortest-path.controller';
import { LocationsModule } from '../../locations/locations.module';
import { DistancesModule } from '../../distances/distances.module';
import { GoogleMapModule } from '../google-map/google-map.module';

@Module({
    controllers: [ShortestPathController],
    providers: [ShortestPathService],
    imports: [LocationsModule, GoogleMapModule, DistancesModule],
})
export class ShortestPathModule {}
