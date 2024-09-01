import { IsMongoId, IsNotEmpty, IsOptional, IsString } from "class-validator"
import { Types } from "mongoose"

export class PostDTO{
    @IsString()
    @IsNotEmpty()
    title: string

    @IsString()
    @IsNotEmpty()
    info: string

    @IsMongoId()
    @IsOptional()
    userID: Types.ObjectId
}