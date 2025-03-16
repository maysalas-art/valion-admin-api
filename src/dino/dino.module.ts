import { Module } from '@nestjs/common';
import { DinoController } from './dino.controller';
import { DinoService } from './dino.service';

@Module({
  controllers: [DinoController],
  providers: [DinoService]
})
export class DinoModule {}
