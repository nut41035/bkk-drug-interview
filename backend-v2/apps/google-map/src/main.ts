import { NestFactory } from '@nestjs/core';
import { GoogleMapModule } from './google-map.module';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino'; 

async function bootstrap() {
  const app = await NestFactory.create(GoogleMapModule);
  
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useLogger(app.get(Logger));

  await app.listen(3000);
}
bootstrap();
