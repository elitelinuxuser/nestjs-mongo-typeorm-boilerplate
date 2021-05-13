import { IsEmail, IsNotEmpty, Contains, isDate, IsMongoId, IsEnum } from 'class-validator';
import {configTypeEnum} from "../entities/configuration.entity";

export class CreateConfigurationDto {
  payload: Object;

  @IsEnum(configTypeEnum)
  type: String;

  enabled: Boolean;
}
