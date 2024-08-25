import { Injectable } from '@nestjs/common';
import { userDto } from 'src/dto/user.dto';

@Injectable()
export class AuthService {
    users : userDto[] = [
        {name: "Ali" , email: "ali@gmail.com" , password: "test123"}
    ]

    getAllUsers(){
        return {message: "Sign Up", Data: this.users}
    }

    SignUp(user: userDto){
        this.users.push(user)
        return {message: "Sign Up", User: user}
    }

    LogIn(){
        return {message: "Log In"}
    }
}
