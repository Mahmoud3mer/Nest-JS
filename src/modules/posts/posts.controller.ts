import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostDTO } from './dto/post.dto';
import { AuthGuard } from 'src/core/guards/auth.guard';

@Controller('posts')
export class PostsController {
    constructor(private _postsService: PostsService){}
    
    @Post()
    @UseGuards(AuthGuard)
    addPost(@Body() body: PostDTO){
        return this._postsService.addNewPost(body)
    }

    @Get()
    @UseGuards(AuthGuard)
    getPosts(){
        return this._postsService.getAllPosts()
    }

    @Put('/:id')
    @UseGuards(AuthGuard)
    updateThisPost(@Param('id') id:string , @Body() body: any){
        return this._postsService.updatePost(id, body)
    }

    @Delete('/:id')
    @UseGuards(AuthGuard)
    deleteThisPost(@Param('id') id:string){
        return this._postsService.deletePost(id)
    }
}
