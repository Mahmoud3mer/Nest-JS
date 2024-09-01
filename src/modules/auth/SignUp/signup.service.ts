import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SignupDTO } from '../dto/auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/core/schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SignupService {
    constructor(@InjectModel(User.name) private useModel: Model<User>){}

    SignUp = async (user: SignupDTO) => {
        let findUser = await this.useModel.findOne({email: user.email})
        if (findUser)
            throw new HttpException('User Alredy Registered', HttpStatus.CONFLICT);

        user.password = await bcrypt.hash(user.password, 8);
        await this.useModel.insertMany(user)
        return { message: "Sign Up", User: user }
    }
}