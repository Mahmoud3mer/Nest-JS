import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User } from "./user.schema";

@Schema({timestamps:true , versionKey: false})
export class Tag {
    @Prop({required: true})
    id: number;

    @Prop({required: true})
    name: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' , required: true})
    createdBy: User
}

export const TagsSchema = SchemaFactory.createForClass(Tag);