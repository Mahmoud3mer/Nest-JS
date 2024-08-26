import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";

export class SignupDTO{
    @IsString()
    @MinLength(3)
    @MaxLength(8)
    name: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(8)
    @MaxLength(16)
    password: string;
}

export class SigInpDTO{
    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(8)
    @MaxLength(16)
    password: string;
}