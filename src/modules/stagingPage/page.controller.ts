import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseFilters,
} from '@nestjs/common';
import { UserService } from './page.service';
import { CreateUserDto } from './dto/create-stagingPage.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { MongoExceptionFilter } from '../../filters/mongoException.filter';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UseFilters(MongoExceptionFilter)
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Post()
  @UseFilters(MongoExceptionFilter)
  createMany(@Body() createUserDtos: [CreateUserDto]) {
    return this.userService.createMany(createUserDtos);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Post()
  update(@Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(updateUserDto);
  }

  @Post()
  updateMany(@Body() updateUserDtos: [UpdateUserDto]) {
    return this.userService.updateMany(updateUserDtos);
  }

  @Get(':id')
  ban(@Param('id') id: string) {
    return this.userService.ban(id);
  }

  @Post()
  banMany(@Body() ids: [string]) {
    return this.userService.banMany(ids);
  }

  @Get(':id')
  unban(@Param('id') id: string) {
    return this.userService.unban(id);
  }

  @Post()
  unbanMany(@Body() ids: [string]) {
    return this.userService.unbanMany(ids);
  }
}
