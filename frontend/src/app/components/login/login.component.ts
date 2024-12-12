import { Component } from '@angular/core';

import { RouterLink, RouterOutlet } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';

  password: string = '';

  constructor(private router: Router) {}

  submit(event: SubmitEvent): void {
    event.preventDefault();

    if (!this.email.trim() && !this.password.trim()) {
      alert('Please fill all fields');

      return;
    }

    console.log(`Email: ${this.email} Password: ${this.password}`);

    this.router.navigate(['/home']);
  }
}
