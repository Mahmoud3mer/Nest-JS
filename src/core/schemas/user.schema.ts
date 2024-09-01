import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({timestamps:true , versionKey: false})
export class User{
    @Prop({required: true})
    name: string

    @Prop({required: true , unique: true})
    email: string

    @Prop({required: true})
    password: string

    @Prop({ type: [String], default: ["User"] })
    role: string[];
}


export const UserSchema = SchemaFactory.createForClass(User);