import { Component, OnInit } from '@angular/core';
import "rxjs/add/operator/map";
import {Http} from '@angular/http';
@Component({
  selector: 'app-ourid',
  templateUrl: './ourid.component.html',
  styleUrls: ['./ourid.component.css']
})
export class OuridComponent implements OnInit {
  pagePhotos:any;
  constructor(private http:Http) { }

  ngOnInit() {
  }
  onSearch(data){
    console.log(data);
    this.http.get("https://pixabay.com/api/?key=7584940-aa9bfd015291caf8d7d3b7fc9&q="+data.motCle+"&per_page=10&page=1")
      .map(resp=>resp.json())
      .subscribe(data=>{
        console.log(data);
        this.pagePhotos=data;
      })
  }
}
