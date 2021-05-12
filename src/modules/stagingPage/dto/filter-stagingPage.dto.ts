import { PartialType } from '@nestjs/mapped-types';
import { CreateStagingPageDto } from './create-stagingPage.dto';

export class FilterStagingPageDto extends PartialType(CreateStagingPageDto) {}
