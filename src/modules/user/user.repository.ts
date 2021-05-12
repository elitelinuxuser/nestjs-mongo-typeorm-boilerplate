import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { FilterUserDto } from './dto/filter-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = new this.userModel(createUserDto);
    return newUser.save();
  }

  async createMany(createUserDtos: [CreateUserDto]): Promise<User[]> {
    const newUsers = [];
    for await(let createUserDto of createUserDtos){
      const newUser = new this.userModel(createUserDto);
      const savedUser = await newUser.save();
      newUsers.push(savedUser);
    }
    return newUsers;
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findById(id).exec();
  }

  async update(id:string, updateUserDto: UpdateUserDto): Promise<User> {
    return this.userModel.findOneAndUpdate({ id }, updateUserDto,{new: true}).exec();
  }

  async updateMany(ids:[string], updateUserDto: UpdateUserDto): Promise<User[]> {
    const updatedUsers = [];
    for await(let _id of ids){
    const updatedUser = await this.userModel.findOneAndUpdate({ _id },updateUserDto,{new: true});
    if(updatedUser) updatedUsers.push(updatedUser);
    }
    return updatedUsers;
  }

  async ban(id: string): Promise<User> {
    return this.userModel.findOneAndUpdate({ id },{status:"BANNED"},{new: true}).exec();
  }

  async banMany(ids: [string]): Promise<User[]> {
    const bannedUsers = [];
    for await(let id of ids){
    const bannedUser = await this.userModel.findOneAndUpdate({ id },{status:"BANNED"},{new: true});
    if (bannedUser) bannedUsers.push(bannedUser);
    }
    return bannedUsers;
  }

  async unban(id: string): Promise<User> {
    return this.userModel.findOneAndUpdate({ id },{status:"ACTIVE"},{new: true}).exec();
  }

  async unbanMany(ids: [string]): Promise<User[]> {
    let bannedUsers = [];
    for await(let id of ids){
    let bannedUser = await this.userModel.findOneAndUpdate({ id },{status:"ACTIVE"},{new: true});
    bannedUser ? bannedUsers.push(bannedUser) : null;
    }
    return bannedUsers;
  }

  async getByFilter(filter: FilterUserDto): Promise<User[]> {
    return this.userModel.find(filter).exec();
  }

}
