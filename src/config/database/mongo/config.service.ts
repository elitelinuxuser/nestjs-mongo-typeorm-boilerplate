import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

/**
 * Service dealing with app config based operations.
 *
 * @class
 */
@Injectable()
export class MongoConfigService {
  constructor(private configService: ConfigService) {}

  get uri(): string {
    return this.configService.get<string>('mongo.uri');
  }
  get dbName(): string {
    return this.configService.get<string>('mongo.dbName');
  }
  get user(): string {
    return this.configService.get<string>('mongo.user');
  }
  get pass(): string {
    return this.configService.get<string>('mongo.pass');
  }
}
