import { Injectable, Inject } from '@nestjs/common';
import { CreatePageDto } from '../page/dto/create-page.dto';
import { UpdateStagingPageDto } from './dto/update-stagingPage.dto';
import { StagingPage } from './entities/stagingPage.entity';
import { StagingPageRepository } from './stagingPage.repository';
import { ConfigurationService } from '../configuration/configuration.service';
import { PageService } from '../page/page.service';
import { PageRepository } from '../page/page.repository';
@Injectable()
export class StagingPageService {
  constructor(private readonly stagingPageRepository: StagingPageRepository,private readonly pageRepository: PageRepository, @Inject("ConfigurationService") private configurationService: ConfigurationService, @Inject("StagingPageService") private pageService: PageService) {}

  
  async findAll(): Promise<StagingPage[]> {
    return this.stagingPageRepository.findAll();
  }

  async findOne(id: string): Promise<StagingPage> {
    return this.stagingPageRepository.findOne(id);
  }

  async deleteOne(id: string): Promise<Boolean> {
    return this.stagingPageRepository.delete(id);
  }
  
  async approvePage(id: string): Promise<StagingPage> {
    const updateStagingPage = await this.stagingPageRepository.approvePage(id);
    if (updateStagingPage) {
      const user = updateStagingPage.user;
      const updatePage = await this.pageRepository.updateByFilter({user},{status:"ACTIVE"});
      if (!updatePage) await this.pageRepository.create(updateStagingPage);
    }
    return updateStagingPage;
  }

  async rejectPage(id: string): Promise<StagingPage> {
    return this.stagingPageRepository.rejectPage(id);
  }

  async create(CreatePageDto: CreatePageDto): Promise<StagingPage> {
    return this.stagingPageRepository.create(CreatePageDto);
  }

  async update(id:string, updateStagingPageDto: UpdateStagingPageDto): Promise<StagingPage> {
    return this.stagingPageRepository.update(id,updateStagingPageDto);
  }

  async updateMany(ids:[string], updateStagingPageDto: UpdateStagingPageDto): Promise<StagingPage[]> {
    return this.stagingPageRepository.updateMany(ids,updateStagingPageDto);
  }
}
