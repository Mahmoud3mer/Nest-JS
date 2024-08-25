import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {

    constructor(private _tagsService:TagsService){}

    @Get()
    getTags(){
        return this._tagsService.getAllTags();
    }

    @Post()
    addTag(@Body() tag: any){
        return this._tagsService.addNewTag(tag);
    }

    @Put('/:id')
    updateTag(@Param() param : any , @Body() tagUpdate: any){
        // console.log(param.id)
        return this._tagsService.updateThisTag(param.id , tagUpdate);
    }

    @Delete('/:id')
    deleteTag(@Param() param : any){
        return this._tagsService.deleteThisTag(param.id);
    }
}
