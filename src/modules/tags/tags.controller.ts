import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagsDTO } from './dto/tag.dto';

@Controller('tags')
export class TagsController {

    constructor(private _tagsService:TagsService){}

    @Get()
    getTags(){
        return this._tagsService.getAllTags();
    }

    @Post()
    addTag(@Body() tag: TagsDTO){
        return this._tagsService.addNewTag(tag);
    }

    @Put('/:id')
    updateTag(@Param() param : any , @Body() tagUpdate: TagsDTO){
        // console.log(param.id)
        return this._tagsService.updateThisTag(param.id , tagUpdate);
    }

    @Delete('/:id')
    deleteTag(@Param() param : any){
        return this._tagsService.deleteThisTag(param.id);
    }
}
