import { Injectable } from '@angular/core';
import { ExploreHeader} from '../model/exploreHeader.model';

@Injectable({
  providedIn: 'root'
})
export class ExploreService {
  categories:ExploreHeader[]
  constructor() { 
  
    this.categories=[
      {
       rows:[{id:1,name:'Social Media',imageUrl:'/assets/images/social_media.svg'},{id:2,name:'Sports',imageUrl:'/assets/images/sports.svg'},{id:2,name:'Humanity',imageUrl:'/assets/images/humanity.svg'}],
      },
      {
       rows:[{id:3,name:'Education',imageUrl:'/assets/images/education.svg'},{id:4,name:'Space',imageUrl:'/assets/images/rocket-launch.svg'},{id:2,name:'Sports',imageUrl:'/assets/images/sports.svg'}]
      },
      {
        rows:[{id:3,name:'Social Media',imageUrl:'/assets/images/social_media.svg'},{id:4,name:'Sports',imageUrl:'/assets/images/sports.svg'},{id:2,name:'Sports',imageUrl:'/assets/images/sports.svg'}]
       },
       {
        rows:[{id:3,name:'Social Media',imageUrl:'/assets/images/social_media.svg'},{id:4,name:'Sports',imageUrl:'/assets/images/sports.svg'},{id:2,name:'Sports',imageUrl:'/assets/images/sports.svg'}]
       }
  ]
  }
  getCategories(){
    return this.categories
  }
}
