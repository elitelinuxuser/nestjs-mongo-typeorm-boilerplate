import { Injectable, Inject } from '@nestjs/common';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
import { Page } from './entities/page.entity';
import { PageRepository } from './page.repository';
import { ConfigurationService } from '../configuration/configuration.service';
import { StagingPageService } from '../stagingPage/stagingPage.service';
@Injectable()
export class PageService {
  constructor(private readonly pageRepository: PageRepository, @Inject("ConfigurationService") private configurationService: ConfigurationService, @Inject("StagingPageService") private stagingPageService: StagingPageService) {}

  
  async findAll(): Promise<Page[]> {
    return this.pageRepository.findAll();
  }

  async findOne(id: string): Promise<Page> {
    return this.pageRepository.findOne(id);
  }

  async deleteOne(id: string): Promise<Boolean> {
    return this.pageRepository.delete(id);
  }
  
  async create(createPageDto: CreatePageDto): Promise<Page> {
    const autoApproveEnabled = await this.configurationService.findOne("AUTO_APPROVE_TIER");
    if (autoApproveEnabled) return this.pageRepository.create(createPageDto);
    else return this.stagingPageService.create(createPageDto);
  }

  async update(updatePageDto: UpdatePageDto): Promise<Page> {
    const autoApproveEnabled = await this.configurationService.findOne("AUTO_APPROVE_TIER");
    if (autoApproveEnabled) return this.pageRepository.update(updatePageDto);
    else return this.stagingPageService.updatePage(updatePageDto);
  }

}
