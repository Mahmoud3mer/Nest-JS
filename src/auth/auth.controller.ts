import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { userDto } from 'src/dto/user.dto';

@Controller('auth')
export class AuthController {
    constructor(private _authService : AuthService){}


    @Get('/user')
    getUsers(){
        return this._authService.getAllUsers()
    }

    @Post('/signup')
    signUp(@Body() user: userDto){
        return this._authService.SignUp(user)
    }

    @Post('/login')
    logIn(){
        return this._authService.LogIn()
    }
}
