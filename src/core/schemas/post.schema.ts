import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { User } from "./user.schema";
import mongoose from "mongoose";


@Schema()
export class Post{
    @Prop({required: true})
    title: string

    @Prop({required: true})
    info: string

    @Prop({type: mongoose.Schema.Types.ObjectId, ref : 'User'})
    userID: User
}

export const PostSchema = SchemaFactory.createForClass(Post);