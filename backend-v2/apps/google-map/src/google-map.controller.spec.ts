import { Test, TestingModule } from '@nestjs/testing';
import { GoogleMapController } from './google-map.controller';
import { GoogleMapService } from './google-map.service';

describe('GoogleMapController', () => {
  let googleMapController: GoogleMapController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GoogleMapController],
      providers: [GoogleMapService],
    }).compile();

    googleMapController = app.get<GoogleMapController>(GoogleMapController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(googleMapController.getHello()).toBe('Hello World!');
    });
  });
});
