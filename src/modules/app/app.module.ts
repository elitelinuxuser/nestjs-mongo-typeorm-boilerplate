import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppConfigModule } from 'src/config/app/config.module';
import { CorsMiddleware } from 'src/shared/middlewares/cors.middleware';
import { MongooseDatabaseModule } from '../database/mongo/database.module';
import { UserModule } from '../user/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [AppConfigModule, MongooseDatabaseModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    const middlewares = [CorsMiddleware];
    consumer.apply(...middlewares).forRoutes('*');
  }
}
