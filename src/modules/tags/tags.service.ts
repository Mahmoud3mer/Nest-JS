import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tag } from 'src/core/schemas/tags.schema';
import { TagsDTO } from './dto/tag.dto';


@Injectable()
export class TagsService {

    constructor(@InjectModel(Tag.name) private tagModel: Model<Tag>){}

    getAllTags = async () =>{
        let tags = await this.tagModel.find().populate({ path: 'createdBy', strictPopulate: false }).exec();
        return {message:"Get Successd" , Tags: tags};
    }

    addNewTag = async (tag: TagsDTO) => {
        await this.tagModel.insertMany(tag)
        return {message: "Tag Added" , Tag: tag};
    }

    updateThisTag = async (tagId : any , tagUpdate: any) => {
        let tag = await this.tagModel.findByIdAndUpdate({_id: tagId},{name: tagUpdate.name},{new:true})
        return {message: "Tag Updated" , tag};
    }

    deleteThisTag = async (tagId: any) => {
        await this.tagModel.findByIdAndDelete({_id: tagId})
        return {message: "Tag Delete"};
    }
}
