import { Module } from '@nestjs/common';
import { ShortestPathService } from './shortest-path/shortest-path.service';
import { ShortestPathController } from './shortest-path/shortest-path.controller';
import { ShortestPathModule } from './shortest-path/shortest-path.module';
import { GoogleMapModule } from './google-map/google-map.module';
import { LocationsModule } from '../locations/locations.module';
import { DistancesModule } from '../distances/distances.module';

@Module({
  providers: [ShortestPathService],
  controllers: [ShortestPathController],
  imports: [ShortestPathModule, GoogleMapModule, LocationsModule, DistancesModule]
})
export class OrderingModule {}
