import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminsModule } from './admins/admins.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/valionro-db'),
    AdminsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
