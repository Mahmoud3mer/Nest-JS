import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";


@Schema({timestamps:true , versionKey: false})
export class Article{
    @Prop({required: true})
    title:string;

    @Prop({required: true})
    description: string;

    // @Prop({required: true})
    // slug: string;

    @Prop({required: true})
    content: string;

    @Prop({required: true})
    coverImage: string;

    @Prop({type: [String]})
    images: string[];

    @Prop({default: 0})
    likes: number;

    @Prop({ type: [String], ref: 'Tag' })
    tagList: Types.Array<string>;

    @Prop({ required: true, ref: 'User' })
    author:Types.ObjectId;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);