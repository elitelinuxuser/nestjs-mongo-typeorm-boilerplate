import { Injectable } from '@nestjs/common';
import { CreateConfigurationDto } from './dto/create-configuration.dto';
import { UpdateConfigurationDto } from './dto/update-configuration.dto';
import { Configuration } from './entities/configuration.entity';
import { ConfigurationRepository } from './configuration.repository';

@Injectable()
export class ConfigurationService {
  constructor(private readonly configurationRepository: ConfigurationRepository) {}

  async create(createConfigurationDto: CreateConfigurationDto): Promise<Configuration> {
    return this.configurationRepository.create(createConfigurationDto);
  }

  async findAll(): Promise<Configuration[]> {
    return this.configurationRepository.findAll();
  }

  async findOne(type: string): Promise<Configuration> {
    return this.configurationRepository.findOne(type);
  }

  async update(updateConfigurationDto: UpdateConfigurationDto): Promise<Configuration> {
    return this.configurationRepository.update(updateConfigurationDto);
  }
}
