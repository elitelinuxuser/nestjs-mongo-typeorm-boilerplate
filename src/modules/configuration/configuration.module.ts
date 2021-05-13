import { Module } from '@nestjs/common';
import { ConfigurationService } from './configuration.service';
import { ConfigurationSchema } from './entities/configuration.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigurationRepository } from './configuration.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Configuration', schema: ConfigurationSchema }])],
  controllers: [],
  providers: [ConfigurationRepository, ConfigurationService],
  exports: [ConfigurationService],
})
export class ConfigurationModule {}
