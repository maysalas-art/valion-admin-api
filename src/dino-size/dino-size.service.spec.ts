import { Test, TestingModule } from '@nestjs/testing';
import { DinoSizeService } from './dino-size.service';

describe('DinoSizeService', () => {
  let service: DinoSizeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DinoSizeService],
    }).compile();

    service = module.get<DinoSizeService>(DinoSizeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
