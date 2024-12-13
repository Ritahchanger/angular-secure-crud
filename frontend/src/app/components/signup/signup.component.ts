import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';


import Swal from 'sweetalert2'

import { Router } from '@angular/router';

import { SignupserviceService } from './signupservice.service';

import { IUserRequest } from '../../FModels/user.request.interface';

interface IUser{

  name:string;

  email:string;

  password:string;

  role: 'admin' | 'user' | 'manager' | string

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
    role:""
  }

  constructor(private router:Router, private singupService: SignupserviceService){}

  submit(event:SubmitEvent):void{

    event.preventDefault()

    if(!this.formData.name.trim() || !this.formData.email.trim() || !this.formData.password.trim() || !this.confirmPassword.trim()){
      alert('Fill all fields kindly');
      return;
    }
    else if(this.formData.password !== this.confirmPassword){

      alert('Kindly make sure the passwords are equal');

    }else{


      this.singupService.registerUser(this.formData).subscribe((response)=>{

        if(response.success){

          Swal.fire({
            icon: 'success',
            title: 'Registration Successful',
            text: 'You have successfully registered!',
          }).then(() => {
            
            this.router.navigate(['/']);
          });

        }else{

          Swal.fire({
            icon: 'error',
            title: 'Registration Failed',
            text: response.message || 'There was an issue with the registration. Please try again.',
          });

        }


      },(error)=>{throw new error('error')},()=>{console.log('Registration occurred')});

      console.log('The form has been submitted successfully:formdata=>',this.formData);

      // this.router.navigate(['/'])

    }

  }

}
