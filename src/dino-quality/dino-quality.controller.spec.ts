import { Test, TestingModule } from '@nestjs/testing';
import { DinoQualityController } from './dino-quality.controller';

describe('DinoQualityController', () => {
  let controller: DinoQualityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DinoQualityController],
    }).compile();

    controller = module.get<DinoQualityController>(DinoQualityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
