import { Test, TestingModule } from '@nestjs/testing';
import { ShortestPathService } from './shortest-path.service';

describe('ShortestPathService', () => {
  let service: ShortestPathService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShortestPathService],
    }).compile();

    service = module.get<ShortestPathService>(ShortestPathService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
