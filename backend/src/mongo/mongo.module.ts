import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Locations, LocationsSchema } from './schemas/locations.schema';

@Module({
  controllers: [],
  providers: [],
  imports: [
      MongooseModule.forRoot("mongodb+srv://swhangprayoat:Cgj427nM3ECiOiav@cluster0.sgfslkh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
            dbName: "app",
      }),
  ],
  exports: [MongoModule],
})
export class MongoModule {}
