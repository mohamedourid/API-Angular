import { Component, OnInit } from '@angular/core';
import "rxjs/add/operator/map";
import {Http} from '@angular/http';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  pagePhotos:any;
  motCle:string="";
  currentPage:number=1;
  size:number=8;
  totalPages:number;
  pages:Array<number>=[];
  constructor(private http:Http) { }

  ngOnInit() {
  }

  onSearch(dataForm){
      this.http.get("https://pixabay.com/api/?key=7584940-aa9bfd015291caf8d7d3b7fc9&q="+dataForm.motCle+"&per_page="+this.size+"&page="+this.currentPage)
        .map(resp=>resp.json())
        .subscribe(data=>{
          this.pagePhotos=data;
          this.totalPages=data.totalHits/this.size;
          if(data.totalHits % this.size !=0) ++this.totalPages;
          this.pages=new Array(this.totalPages);

        })
  }
  goToPage(i){
    this.currentPage=i+1;
    this.onSearch({motCle:this.motCle});
  }

}
