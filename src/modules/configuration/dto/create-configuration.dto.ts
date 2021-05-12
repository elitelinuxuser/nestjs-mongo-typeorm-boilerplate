import { IsEmail, IsNotEmpty, Contains, isDate, IsMongoId } from 'class-validator';

export class CreateConfigurationDto {

  payload: Object;

  @Contains("AUTO_APPROVE_PAGE | AUTO_APPROVE_TIER")
  type: string

  enabled: Boolean;
}
