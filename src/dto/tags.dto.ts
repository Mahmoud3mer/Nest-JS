import { IsNotEmpty, IsNumber, MaxLength, MinLength } from "class-validator"

export class TagsDto{
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(6)
    name: string

    @IsNotEmpty()
    @IsNumber()
    id: number
}