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
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
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

  @Put()
  update(@Body() id:string, updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Put()
  updateMany(@Body() ids:[string], updateUserDto: UpdateUserDto) {
    return this.userService.updateMany(ids,updateUserDto);
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
