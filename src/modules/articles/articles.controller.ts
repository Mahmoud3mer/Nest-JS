import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticleDTO } from './dto/article.dto';

@Controller('articles')
export class ArticlesController {
    constructor(private _articlesService:ArticlesService){

    }
    @Get()
    getArticles(){
        return this._articlesService.getAllArticles()
    }

    @Post()
    addArticles(@Body() body: ArticleDTO){
        return this._articlesService.getNewArticles(body)
    }

    @Delete('/:id')
    deleteArticles(@Param() param: any){
        return this._articlesService.deleteThisArticles(param.id)
    }
}
