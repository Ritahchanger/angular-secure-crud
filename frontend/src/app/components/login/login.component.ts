import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginserviceService } from './loginservice.service';

import ILoginResponse from '../../FModels/loginresponse.interface';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], // Fixed typo: styleUrl -> styleUrls
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  backendResponse: ILoginResponse | null = null;
  isLoading: boolean = false;

  constructor(
    private router: Router,
    private loginService: LoginserviceService
  ) {}

  submit(event: SubmitEvent): void {
    event.preventDefault();

    if (!this.email.trim()) {
      alert('Email is required');
      return;
    }

    if (!this.password.trim()) {
      alert('Password is required');
      return;
    }

    this.authenticateUser();
  }

  authenticateUser(): void {
    const payload = {
      email: this.email,
      password: this.password,
    };

    this.isLoading = true;

    this.loginService.authenticateUser(payload).subscribe(
      (response: ILoginResponse) => {
        this.backendResponse = response;
        

        if (this.backendResponse.success) {
          alert(this.backendResponse.message); 


          sessionStorage.setItem('token',this.backendResponse.token as string)

          sessionStorage.setItem('name',this.backendResponse.name as string)

          sessionStorage.setItem('userId',this.backendResponse.id as string)

          sessionStorage.setItem('role',this.backendResponse.id as string)

          this.router.navigate(['/home']);

        } else {

          alert('Authentication failed: ' + this.backendResponse.message);

        }
      },
      (error: any) => {
        console.error('Error occurred:', error);
        alert('An error occurred while logging in. Please try again later.');
      },
      () => {
        this.isLoading = false;
        console.log('Done authenticating the user');
      }
    );
  }

  navigateSignup():void{

    this.router.navigate(['/signup'])

  }

}
