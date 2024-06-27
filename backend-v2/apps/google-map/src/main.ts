import { NestFactory } from '@nestjs/core';
import { GoogleMapModule } from './google-map.module';

async function bootstrap() {
  const app = await NestFactory.create(GoogleMapModule);
  await app.listen(3000);
}
bootstrap();
