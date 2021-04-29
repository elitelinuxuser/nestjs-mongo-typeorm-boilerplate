import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.create(createUserDto);
  }

  async createMany(createUserDtos: [CreateUserDto]): Promise<User[]> {
    return this.userRepository.createMany(createUserDtos);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async findOne(id: string): Promise<User> {
    return this.userRepository.findOne(id);
  }

  async update(updateUserDto: UpdateUserDto): Promise<User> {
    return this.userRepository.update(updateUserDto);
  }

  async updateMany(updateUserDtos: [UpdateUserDto]): Promise<User[]> {
    return this.userRepository.updateMany(updateUserDtos);
  }

  async ban(id: string): Promise<User> {
    return this.userRepository.ban(id);
  }

  async banMany(ids: [string]): Promise<User[]> {
    return this.userRepository.banMany(ids);
  }

  async unban(id: string): Promise<User> {
    return this.userRepository.ban(id);
  }

  async unbanMany(ids: [string]): Promise<User[]> {
    return this.userRepository.banMany(ids);
  }
}
