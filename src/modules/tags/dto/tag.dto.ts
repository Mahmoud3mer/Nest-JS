import { IsNotEmpty, IsNumber, MaxLength, MinLength } from "class-validator"
import { ObjectId } from "mongoose"

export class TagsDTO{
    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    @IsNumber()
    id: number
    
    @IsNotEmpty()
    createdBy: ObjectId;
}