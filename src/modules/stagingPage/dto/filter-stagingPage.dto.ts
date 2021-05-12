import { PartialType } from '@nestjs/mapped-types';
import { CreatePageDto } from '../../page/dto/create-page.dto';

export class FilterStagingPageDto extends PartialType(CreatePageDto) {}
