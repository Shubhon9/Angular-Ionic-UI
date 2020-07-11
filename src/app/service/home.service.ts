import { Injectable } from '@angular/core';
import { Home } from '../model/home.model'
@Injectable({
  providedIn: 'root'
})
export class HomeService {

topics:Home[]

  constructor() {
    this.topics=[
    {id:1,imageUrl:'/assets/images/youtube.png',topic:'Youtube Vs Tik Tok',description:'Which is better?'},
    {id:2,imageUrl:'/assets/images/election_2020.png',topic:'2020 Presidential Election',description:'Which candidate would make the best US president?'},
    {id:3,imageUrl:'/assets/images/energy_fossils.jpg',topic:'Alternative Energy vs. Fossil Fuels',description:'Can alternative energy effectively replace fossil fuels?'},
    {id:4,imageUrl:'/assets/images/animal_dissection.jpg',topic:'Animal Dissection',description:'Should K-12 Students Dissect Animals in Science Classrooms?'},
    {id:5,imageUrl:'/assets/images/banned_books.jpg',topic:'Banned Books',description:'Should parents or other adults be able to ban books from schools and libraries?'},
    {id:6,imageUrl:'/assets/images/college_edu.jpg',topic:'College Education',description:'Is a college education worth it?'}
    
  ]
   }
   getTopics(){
     return this.topics
   }
}
