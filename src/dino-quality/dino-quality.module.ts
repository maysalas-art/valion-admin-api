import { Module } from '@nestjs/common';
import { DinoQualityController } from './dino-quality.controller';
import { DinoQualityService } from './dino-quality.service';
import { DinoQualitySchema } from './schemas/dino-quality.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'DinoQuality', schema: DinoQualitySchema }])
  ],
  controllers: [DinoQualityController],
  providers: [DinoQualityService]
})
export class DinoQualityModule {}
