import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { CreateStagingPageDto } from './create-stagingPage.dto';

export class UpdateStagingPageDto extends PartialType(CreateStagingPageDto) {
    @IsNotEmpty()
    id:String;
}
