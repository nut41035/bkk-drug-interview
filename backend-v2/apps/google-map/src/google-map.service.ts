import { Injectable } from '@nestjs/common';

@Injectable()
export class GoogleMapService {
  getHello(): string {
    return 'Hello World!';
  }
}
