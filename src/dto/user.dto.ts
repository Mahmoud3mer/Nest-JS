import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class userDto {
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(6)
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(14)
    password: string;
}