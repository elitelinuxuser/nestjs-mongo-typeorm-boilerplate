import { Injectable } from '@nestjs/common';
import { InjectModel, Inject } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePageDto } from './dto/create-page.dto';
import { FilterPageDto } from './dto/filter-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
import { Page, PageDocument } from './entities/page.entity';
import { User, UserDocument } from '../user/entities/user.entity';
import { Configuration, ConfigurationDocument } from '../configuration/entities/configuration.entity';

@Injectable()
export class PageRepository {
  constructor(@InjectModel(Page) private pageModel: Model<PageDocument>) {}

  async create(createPageDto: CreatePageDto): Promise<Page> {
   const pageData = createPageDto;
   pageData.status = "ACTIVE";
   const newPage = new this.pageModel.create(pageData);
    return newPage.save();
  }

  async findAll(): Promise<Page[]> {
    return this.pageModel.find().exec();
  }

  async findOne(id: string): Promise<Page> {
    return this.pageModel.findById(id).exec();
  }

  async update(id:string, updatePageDto: UpdatePageDto): Promise<Page> {
    return this.pageModel.findOneAndUpdate({ _id:id }, updatePageDto,{new: true}).exec();
  }

  async updateMany(ids:[string],updatePageDto: UpdatePageDto): Promise<Page[]> {
    const updatedPages = [];
    for await(let _id of ids){
    const updatedPage = await this.pageModel.findOneAndUpdate({ _id },updatePageDto,{new: true});
    if (updatedPage) updatedPages.push(updatedPage);
    }
    return updatedPages;
  }

  async updateByFilter(filter:FilterPageDto, updatePageDto: UpdatePageDto): Promise<Page> {
    return this.pageModel.findOneAndUpdate(filter, updatePageDto,{new: true}).exec();
  }

  async updateManyByFilters(filters:[FilterPageDto],updatePageDto: UpdatePageDto): Promise<Page[]> {
    const updatedPages = [];
    for await(let filter of filters){
    const updatedPage = await this.pageModel.findOneAndUpdate(filter,updatePageDto,{new: true});
    if (updatedPage) updatedPages.push(updatedPage);
    }
    return updatedPages;
  }

  async getByFilter(filter: FilterPageDto): Promise<Page[]> {
    return this.pageModel.find(filter).exec();
  }

  async delete(id: string): Promise<Boolean> {
    return this.pageModel.deleteMany({_id:id}).exec();
  }
}
