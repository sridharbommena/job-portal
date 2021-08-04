import { Injectable } from '@angular/core';
import { post } from './models/post';

@Injectable()
export class SharedService{
    post:post;
    setPostData(post: post){
      this.post= post;
    }
    getPostData(){
      return this.post;
    }
}
