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
import { StagingPageService } from './stagingPage.service';
import { CreatePageDto } from '../page/dto/create-page.dto';
import { UpdateStagingPageDto } from './dto/update-stagingPage.dto';
import { MongoExceptionFilter } from '../../filters/mongoException.filter';

@Controller('stagingPage')
export class StagingPageController {
  constructor(private readonly stagingPageService: StagingPageService) {}

  @Get()
  findAll() {
    return this.stagingPageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stagingPageService.findOne(id);
  }

  @Get(':id')
  approvePage(@Param('id') id: string) {
    return this.stagingPageService.approvePage(id);
  }

  @Get(':id')
  rejectPage(@Param('id') id: string) {
    return this.stagingPageService.rejectPage(id);
  }

  @Post()
  @UseFilters(MongoExceptionFilter)
  create(@Body() createPageDto: CreatePageDto) {
    return this.stagingPageService.create(createPageDto);
  }
  
  @Put()
  update(@Body() id:string, updateStagingPageDto: UpdateStagingPageDto) {
    return this.stagingPageService.update(id, updateStagingPageDto);
  }
}
