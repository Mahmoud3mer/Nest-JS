import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/core/schemas/user.schema';
import { SigInpDTO } from '../dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class SigninService {
    constructor(@InjectModel(User.name) private useModel: Model<User> , private _jwtService:JwtService){}
    SignIn = async (body: SigInpDTO) => {
        let findUser = await this.useModel.findOne({email: body.email})
        const isMatchPass = await bcrypt.compare(body.password, findUser.password);
        if (!findUser || !isMatchPass) {
            throw new HttpException('Email or Passowrd is not valid!', HttpStatus.BAD_REQUEST);
        }
        let token = this._jwtService.sign({name: findUser.name , email: findUser.email , id: findUser._id},{secret: "3mer"})
        return { message: "Sign in Welcome" , Token: token}
    }
}
