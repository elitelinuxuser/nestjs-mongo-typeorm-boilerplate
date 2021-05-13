import { Module } from '@nestjs/common';
import { PageService } from './page.service';
import { PageSchema } from './entities/page.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { PageRepository } from './page.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Page', schema: PageSchema }])],
  controllers: [],
  providers: [PageRepository, PageService],
  exports: [PageService],
})
export class PageModule {}
