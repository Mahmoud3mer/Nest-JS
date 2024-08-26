import { Module } from '@nestjs/common';
import { SignupController } from './SignUp/signup.controller';
import { SignupService } from './SignUp/signup.service';
import { SigninController } from './SgnIn/signin.controller';
import { SigninService } from './SgnIn/signin.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/core/schemas/user.schema';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [SignupController, SigninController],
  providers: [SignupService ,SigninService ,JwtService]
})
export class AuthModule {}
