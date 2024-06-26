import { Module } from '@nestjs/common';
import { LocationService } from './location.service';
import { LocationController } from './location.controller';
import { DatabaseModule, LoggerModule } from '@app/common';
import { LocationRepository } from './location.repository';
import { Location, LocationSchema } from './entities/location.schema';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: Location.name, schema: LocationSchema },
    ]),
    LoggerModule,
  ],
  controllers: [LocationController],
  providers: [LocationService, LocationRepository],
})
export class LocationModule {}
