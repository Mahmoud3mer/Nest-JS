import { Body, Controller, Post } from '@nestjs/common';
import { SignupService } from './signup.service';
import { SignupDTO } from '../dto/auth.dto';

@Controller('signup')
export class SignupController {
    constructor(private _signupService: SignupService) { }

    @Post()
    signUp(@Body() user: SignupDTO) {
        return this._signupService.SignUp(user)
    }
}
