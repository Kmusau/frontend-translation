import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * register
   */
  public register(registerForm: NgForm) {
    this.userService.createUser(registerForm.value).subscribe(
      (response: Users) => {
        this.router.navigate(["/login"]);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
