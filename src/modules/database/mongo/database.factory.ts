import { MongooseModuleOptions } from '@nestjs/mongoose';
import { MongoConfigService } from 'src/config/database/mongo/config.service';

export const mongooseConfigFactory = async (
  configService: MongoConfigService,
): Promise<MongooseModuleOptions> => ({
  uri: configService.uri,
  dbName: configService.dbName,
  user: configService.user,
  pass: configService.pass,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
