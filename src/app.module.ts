import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TagsModule } from './modules/tags/tags.module';
import { AuthModule } from './modules/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticlesModule } from './modules/articles/articles.module';

@Module({
  imports: [TagsModule, AuthModule, ArticlesModule, MongooseModule.forRoot('mongodb://localhost:27017/NestJS-ITI')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
