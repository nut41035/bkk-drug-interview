import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DistancesService } from './distances.service';
import { Distances, DistancesSchema } from '../mongo/schemas/distances.schema';

@Module({
  controllers: [],
  providers: [DistancesService],
  imports: [
      MongooseModule.forFeature([{ name: Distances.name, schema: DistancesSchema }])
  ],
  exports: [DistancesModule, DistancesService],
})
export class DistancesModule {}
