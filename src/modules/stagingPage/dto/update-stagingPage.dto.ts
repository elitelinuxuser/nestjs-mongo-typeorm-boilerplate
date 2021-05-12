import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { CreatePageDto } from '../../page/dto/create-page.dto';

export class UpdateStagingPageDto extends PartialType(CreatePageDto) {}
