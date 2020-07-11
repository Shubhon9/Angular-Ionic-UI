import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 hide=true;
 register:boolean=false
 action:string='Login'
 a=true
 userForm=new FormGroup(
   {
     emailId:new FormControl('',[Validators.email,Validators.required]),
     password:new FormControl('',Validators.required)
   }  
)
  constructor() { }
 
  ngOnInit() {
    
  }
  getErrorMessage(){
    return "hi"
  }
  onSubmit(){
    console.log(this.register)
    console.log(this.userForm.value)
  }
 toggleAction(register:boolean,action:string){
  this.register=register
  this.action=action
 }

}
