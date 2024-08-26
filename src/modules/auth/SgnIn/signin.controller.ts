import { Body, Controller, Post } from '@nestjs/common';
import { SigninService } from './signin.service';
import { SigInpDTO } from '../dto/auth.dto';

@Controller('signin')
export class SigninController {
    constructor(private _signinService:SigninService){}

    @Post()
    signIn(@Body() body: SigInpDTO){

        return this._signinService.SignIn(body)
    }
}
