import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // Initialize form data object
  formData = {
    firstName: '',
    lastName: '',
    age: null,
    gender: '',
    email: '',
    username: '',
    password: '',
    phone: ''
  };

  // Variables for displaying messages
  message: string = '';
  messageClass: string = '';
  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  // Function to handle form submission
  onSubmit() {
    this.apiService.registerUser(this.formData).subscribe(
      (response) => {
        // Log success message and set message variables
        console.log('User registered successfully:', response);
        this.message = 'User registered successfully.';
        this.messageClass = 'success-message';
        // Reset form after successful registration
        this.resetForm();
      },
      (error) => {
        // Log error message and set message variables
        console.error('Error registering user:', error);
        this.message = 'Error registering user. Please try again.';
        this.messageClass = 'error-message';
      }
    );
  }

  // Function to reset form data
  resetForm() {
    this.formData = {
      firstName: '',
      lastName: '',
      age: null,
      gender: '',
      email: '',
      username: '',
      password: '',
      phone: ''
    };
  }
}
