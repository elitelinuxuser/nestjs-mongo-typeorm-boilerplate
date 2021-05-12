import { Module } from '@nestjs/common';
import { UserService } from './page.service';
import { UserController } from './page.controller';
import { UserSchema } from './entities/stagingPage.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { UserRepository } from './page.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  controllers: [UserController],
  providers: [UserRepository, UserService],
  exports: [UserService],
})
export class UserModule {}
