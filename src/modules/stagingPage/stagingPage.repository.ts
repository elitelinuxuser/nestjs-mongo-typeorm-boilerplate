import { Injectable } from '@nestjs/common';
import { InjectModel, Inject } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePageDto } from '../page/dto/create-page.dto';
import { FilterStagingPageDto } from './dto/filter-stagingPage.dto';
import { UpdateStagingPageDto } from './dto/update-stagingPage.dto';
import { StagingPage, StagingPageDocument } from './entities/stagingPage.entity';
import { User, UserDocument } from '../user/entities/user.entity';
import { Configuration, ConfigurationDocument } from '../configuration/entities/configuration.entity';

@Injectable()
export class StagingPageRepository {
  constructor(@InjectModel(StagingPage) private stagingPageModel: Model<StagingPageDocument>) {}

  async create(createPageDto: CreatePageDto): Promise<StagingPage> {
   let pageData = createPageDto;
   pageData.status = "PENDING";
   const newStagingPage = new this.stagingPageModel.create(pageData);
    return newStagingPage.save();
  }

  async findAll(): Promise<StagingPage[]> {
    return this.stagingPageModel.find().exec();
  }

  async findOne(id: string): Promise<StagingPage> {
    return this.stagingPageModel.findById(id).exec();
  }

  async approvePage(id:string): Promise<StagingPage> {
    return this.stagingPageModel.findOneAndUpdate({ _id:id }, {status:"APPROVED"},{new: true}).exec();
  }

  async rejectPage(id:string): Promise<StagingPage> {
    return this.stagingPageModel.findOneAndUpdate({ _id:id }, {status:"REJECTED"},{new: true}).exec();
  }

  async update(id:string, updateStagingPageDto: UpdateStagingPageDto): Promise<StagingPage> {
    return this.stagingPageModel.findOneAndUpdate({ _id:id }, updateStagingPageDto,{new: true}).exec();
  }

  async updateMany(ids:[string], updateStagingPageDto: UpdateStagingPageDto): Promise<StagingPage[]> {
    const updatedStagingPages = [];
    for await(let _id of ids){
    const updatedStagingPage = await this.stagingPageModel.findOneAndUpdate({ _id },updateStagingPageDto,{new: true});
    if (updatedStagingPage) updatedStagingPages.push(updatedStagingPage);
    }
    return updatedStagingPages;
  }

  async getByFilter(filter: FilterStagingPageDto): Promise<StagingPage[]> {
    return this.stagingPageModel.find(filter).exec();
  }

  async delete(id: string): Promise<Boolean> {
    return this.stagingPageModel.deleteMany({_id:id}).exec();
  }
}
