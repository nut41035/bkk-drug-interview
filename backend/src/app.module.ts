import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderingModule } from './ordering/ordering.module';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoModule } from './mongo/mongo.module';
import { LocationsModule } from './locations/locations.module';

@Module({
  imports: [
      ConfigModule.forRoot(),
      OrderingModule, HttpModule,
      MongoModule, LocationsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
