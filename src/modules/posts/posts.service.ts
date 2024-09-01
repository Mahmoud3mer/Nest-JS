import { Injectable } from '@nestjs/common';
import { PostDTO } from './dto/post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from 'src/core/schemas/post.schema';
import { Model } from 'mongoose';

@Injectable()
export class PostsService {
    constructor(@InjectModel(Post.name) private postModel: Model<Post>){}

    async addNewPost(post: PostDTO){
        await this.postModel.insertMany(post);
        return {message: 'Post Added.', data: post}
    }

    async getAllPosts(){
        let posts = await this.postModel.find().populate('userID');
        return {message: 'Get All Successed.', data: posts}
    }

    async updatePost(id: string,body: any){
        let findPost = await this.postModel.findByIdAndUpdate(id,body,{new:true});
        return {message: 'Update Successed.', data: findPost}
    }

    async deletePost(id: string){
        let findPost = await this.postModel.findByIdAndDelete(id);
        return {message: 'Deleted Successed.', data: findPost}
    }
}
