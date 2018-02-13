import {Injectable} from '@angular/core';

@Injectable()
export class AboutService{
  info={
    nom:"M.OURID",
    email:"mohamedourid@gmail.com",
    tel:652128769
  }
  comments=[
    {date:new Date(),message:"waaa hahahahaaa"},
    {date:new Date(),message:"waaa hahahahaaa"},
    {date:new Date(),message:"waaa hahahahaaa"}
  ];
  addComment(c){
    this.comments.push(c);
  }
  getAllComment(){
    return this.comments;
  }
  getInfo(){
    return this.info;
  }
}
