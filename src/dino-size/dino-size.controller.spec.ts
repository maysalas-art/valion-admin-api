import { Test, TestingModule } from '@nestjs/testing';
import { DinoSizeController } from './dino-size.controller';

describe('DinoSizeController', () => {
  let controller: DinoSizeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DinoSizeController],
    }).compile();

    controller = module.get<DinoSizeController>(DinoSizeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
