import { Component, OnInit } from '@angular/core';
import {AboutService} from '../../services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  infos:{nom:string,email:string,tel:number}={nom:'',email:'',tel:null};
  comments=[];
  commentaire={date:null,message:""};
  constructor(private aboutService:AboutService) {
    this.infos=this.aboutService.getInfo();
    this.comments=this.aboutService.getAllComment();
  }

  ngOnInit() {
  }
  onAddCommentaire(c){
    console.log(c);
    c.date=new Date();
    this.comments.push(c);
    this.commentaire.message="";
  }

  /*onAddCommentaire(){
    this.commentaire.date=new Date();
    this.comments.push(this.commentaire);
    this.commentaire={date:null,message:""};
  }*/
}
