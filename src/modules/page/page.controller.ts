import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Patch,
  Param,
  Delete,
  UseFilters,
} from '@nestjs/common';
import { PageService } from './page.service';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
import { MongoExceptionFilter } from '../../filters/mongoException.filter';

@Controller('page')
export class PageController {
  constructor(private readonly pageService: PageService) {}

  @Get()
  findAll() {
    return this.pageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pageService.findOne(id);
  }

  @Post()
  @UseFilters(MongoExceptionFilter)
  create(@Body() createPageDto: CreatePageDto) {
    return this.pageService.create(createPageDto);
  }
  
  @Put()
  update(@Body() id:string, updatePageDto: UpdatePageDto) {
    return this.pageService.update(id, updatePageDto);
  }
}
