import { Injectable } from '@nestjs/common';
import { TagsDto } from 'src/dto/tags.dto';


@Injectable()
export class TagsService {

    private tags: TagsDto[] = [
        {id: 1 , name: "Javascript"},
        {id: 2 , name: "React"},
        {id: 3 , name: "Angular"},
        {id: 4 , name: "NextJS"}
    ]

    getAllTags(){
        return {message: this.tags};
    }

    addNewTag(tag: TagsDto){
        tag.id = this.tags[this.tags.length - 1].id + 1;
        this.tags.push(tag);
        return {message: "Tag Added" , tag: tag};
    }

    updateThisTag(tagId : any , tagUpdate: any){
        this.tags[tagId - 1].name = tagUpdate.name
        return {message: "Tag Updated"};
    }

    deleteThisTag(tagId: any){
        this.tags = this.tags.filter((tag: any) => tag.id !== tagId)
        return {message: "Tag Delete", Tags: this.tags};
    }
}
