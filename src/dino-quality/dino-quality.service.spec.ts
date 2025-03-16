import { Test, TestingModule } from '@nestjs/testing';
import { DinoQualityService } from './dino-quality.service';

describe('DinoQualityService', () => {
  let service: DinoQualityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DinoQualityService],
    }).compile();

    service = module.get<DinoQualityService>(DinoQualityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
