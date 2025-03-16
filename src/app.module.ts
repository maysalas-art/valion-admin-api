import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminsModule } from './admins/admins.module';
import { DinoQualityModule } from './dino-quality/dino-quality.module';
import { DinoModule } from './dino/dino.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/valionro-db'),
    AdminsModule,
    DinoQualityModule,
    DinoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
