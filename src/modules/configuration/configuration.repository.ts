import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateConfigurationDto } from './dto/create-configuration.dto';
import { UpdateConfigurationDto } from './dto/update-configuration.dto';
import { Configuration, ConfigurationDocument } from './entities/configuration.entity';

@Injectable()
export class ConfigurationRepository {
  constructor(@InjectModel(Configuration) private configurationModel: Model<ConfigurationDocument>) {}

  async create(createConfigurationDto: CreateConfigurationDto): Promise<Configuration> {
    const newConfig = new this.configurationModel(createConfigurationDto);
    return newConfig.save();
  }

  async findAll(): Promise<Configuration[]> {
    return this.configurationModel.find().exec();
  }

  async findOne(type: string): Promise<Configuration> {
    return this.configurationModel.findOne(type).exec();
  }

  async update(updateConfigurationDto: UpdateConfigurationDto): Promise<Configuration> {
    const type = updateConfigurationDto.type;
    return this.configurationModel.findOneAndUpdate({ type }, updateConfigurationDto ,{new: true}).exec();
  }
}
