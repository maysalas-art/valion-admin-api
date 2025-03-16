import { Module } from '@nestjs/common';
import { DinoSizeController } from './dino-size.controller';
import { DinoSizeService } from './dino-size.service';
import { DinoSizeSchema } from './schemas/dino-size.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'DinoSize',
      schema: DinoSizeSchema
    }])
  ],
  controllers: [DinoSizeController],
  providers: [DinoSizeService]
})
export class DinoSizeModule {}
