import { Test, TestingModule } from '@nestjs/testing';
import { DinoService } from './dino.service';

describe('DinoService', () => {
  let service: DinoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DinoService],
    }).compile();

    service = module.get<DinoService>(DinoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
