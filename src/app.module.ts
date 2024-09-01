import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TagsModule } from './modules/tags/tags.module';
import { AuthModule } from './modules/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticlesModule } from './modules/articles/articles.module';
import { PostsModule } from './modules/posts/posts.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [TagsModule, AuthModule, ArticlesModule, PostsModule, MongooseModule.forRoot('mongodb://localhost:27017/NestJS-ITI')],
  controllers: [AppController],
  providers: [AppService,JwtService],
})
export class AppModule {}
