import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';


import { Router } from '@angular/router';

interface IUser{

  name:string;

  email:string;

  password:string;

  roles: 'admin' | 'user' | 'manager' | string

}
@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  confirmPassword:string = ""

  formData:IUser={
    name:"",
    email:"",
    password:"",
    roles:""
  }

  constructor(private router:Router){}

  submit(event:SubmitEvent):void{

    event.preventDefault()

    if(!this.formData.name.trim() || !this.formData.email.trim() || !this.formData.password.trim() || !this.confirmPassword.trim()){
      alert('Fill all fields kindly');
      return;
    }
    else if(this.formData.password !== this.confirmPassword){

      alert('Kindly make sure the passwords are equal');

    }else{

      console.log('The form has been submitted successfully:formdata=>',this.formData);

      this.router.navigate(['/'])

    }

  }

}
