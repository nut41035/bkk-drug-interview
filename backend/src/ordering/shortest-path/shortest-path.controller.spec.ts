import { Test, TestingModule } from '@nestjs/testing';
import { ShortestPathController } from './shortest-path.controller';

describe('ShortestPathController', () => {
  let controller: ShortestPathController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShortestPathController],
    }).compile();

    controller = module.get<ShortestPathController>(ShortestPathController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
