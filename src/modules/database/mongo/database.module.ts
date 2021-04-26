import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoConfigModule } from 'src/config/database/mongo/config.module';
import { MongoConfigService } from 'src/config/database/mongo/config.service';
import { mongooseConfigFactory } from './database.factory';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [MongoConfigModule],
      useFactory: mongooseConfigFactory,
      inject: [MongoConfigService],
    }),
  ],
})
export class MongooseDatabaseModule {}
