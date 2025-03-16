import { Module } from '@nestjs/common';
import { DinoController } from './dino.controller';
import { DinoService } from './dino.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DinoSchema } from './schemas/dino.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'Dino',
      schema: DinoSchema
    }])
  ],
  controllers: [DinoController],
  providers: [DinoService]
})
export class DinoModule {}
