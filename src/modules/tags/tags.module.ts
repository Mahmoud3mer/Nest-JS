import { Module } from '@nestjs/common';
import { TagsController } from './tags.controller';
import { TagsService } from './tags.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Tag, TagsSchema } from 'src/core/schemas/tags.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Tag.name, schema: TagsSchema }])],
    controllers: [TagsController],
    providers: [TagsService]
})
export class TagsModule {}
