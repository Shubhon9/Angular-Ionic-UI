import { Component, OnInit } from '@angular/core';
import { ExploreService } from 'src/app/service/explore.service';
import { ExploreHeader } from 'src/app/model/exploreHeader.model';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {
 exploreHeader:ExploreHeader[]
  constructor(private exploreService:ExploreService) { }
  showData:number=2
  flag:boolean=false
  ngOnInit() {
    this.exploreHeader=this.exploreService.getCategories()
  }
  getData(action:string){
    if(action=='seeAll'){
    this.showData=this.exploreHeader.length
    this.flag=true
  }
  else{
    this.showData=2
    this.flag=false
  }
}
}
