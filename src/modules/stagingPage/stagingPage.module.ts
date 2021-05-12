import { Module } from '@nestjs/common';
import { StagingPageService } from './stagingPage.service';
import { StagingPageSchema } from './entities/stagingPage.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { StagingPageRepository } from './stagingPage.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'StagingPage', schema: StagingPageSchema }])],
  controllers: [],
  providers: [StagingPageRepository, StagingPageService],
  exports: [StagingPageService],
})
export class StagingPageModule {}
