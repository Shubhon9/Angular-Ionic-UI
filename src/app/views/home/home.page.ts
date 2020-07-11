import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  topics=[]
  //id:number
  constructor(private homeService:HomeService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    //this.id=this.route.snapshot.params.get('topicId')
    this.topics=this.homeService.getTopics();
  }
  navigate(id:number){
    this.router.navigate(['/dashboard/tabs/home/',id])
  }
}
