import { Module } from '@nestjs/common';
import { AdminsController } from './admins.controller';
import { AdminsService } from './admins.service';
import { AdminSchema } from './schemas/admin.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Admin', schema: AdminSchema }])
  ],
  controllers: [AdminsController],
  providers: [AdminsService]
})
export class AdminsModule {}
