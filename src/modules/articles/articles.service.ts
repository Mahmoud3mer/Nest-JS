import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article } from 'src/core/schemas/article.schema';
import { ArticleDTO } from './dto/article.dto';

@Injectable()
export class ArticlesService {
    constructor(@InjectModel(Article.name) private articleModel: Model<Article>){}

    getAllArticles = async () => {
        let articles = await this.articleModel.find().populate("author",{ name:1 , email: 1}).populate("tagList" , {id:1 , name:1}).exec();
        return {message: "get all articles", Articles: articles};
    }

    getNewArticles = async (body: ArticleDTO) => {
        let newArticle = await this.articleModel.insertMany(body);
        return {message: "get all articles", Articles: newArticle};
    }

    deleteThisArticles = async (id: number) => {
        await this.articleModel.findByIdAndDelete({_id: id});
        return {message: "Deleted Successed."};
    }
}
