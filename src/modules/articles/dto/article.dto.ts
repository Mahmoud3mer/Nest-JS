import { IsNotEmpty } from "class-validator";
import { ObjectId } from "mongoose";


export class ArticleDTO{
    @IsNotEmpty()
    title:string;

    @IsNotEmpty()
    description: string;

    // @IsNotEmpty()
    // slug: string;

    @IsNotEmpty()
    content: string;

    @IsNotEmpty()
    coverImage: string;

    @IsNotEmpty()
    images: string[];

    @IsNotEmpty()
    likes: number;

    @IsNotEmpty()
    tagList: string[]

    @IsNotEmpty()
    author:ObjectId;

}