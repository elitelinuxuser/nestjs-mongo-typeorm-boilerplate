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
   let pageData = createPageDto;
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

  async update(updatePageDto: UpdatePageDto): Promise<Page> {
    const id = updatePageDto.id;
    return this.pageModel.findOneAndUpdate({ id }, updatePageDto,{new: true}).exec();
  }

  async updateMany(updatePageDtos: [UpdatePageDto]): Promise<Page[]> {
    let updatedPages = [];
    for await(let updatePageDto of updatePageDtos){
    let id = updatePageDto.id; 
    let updatedPage = await this.pageModel.findOneAndUpdate({ id },updatePageDto,{new: true});
    updatedPage ? updatedPages.push(updatedPage) : null;
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
