import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators , FormBuilder, NgForm}  from '@angular/forms';
import { Router } from '@angular/router';
import { JwtClientService } from '../services/jwt-client.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
// This is needed for validation
export class LoginComponent implements OnInit {
  reactiveForm: FormGroup;
  submitted: boolean = false;

  constructor(private FormBuilder:FormBuilder, private jwtclient: JwtClientService, private router: Router) {
    this.reactiveForm = this.FormBuilder.group({
      username : new FormControl (null , [Validators.required])
    })
   }
   get f(){
    return this.reactiveForm.controls;
   }
   onSubmit(){
    this.submitted = true;
    if(this.reactiveForm.invalid){
      return;
    }
   }

   /**
    * login
    */
   public login(loginForm: NgForm) {
    localStorage.clear();
    this.jwtclient.generateToken(loginForm.value).subscribe(
      (response: string) => {
        console.log(response);
        localStorage.setItem("token", response);
        this.router.navigate(["/sentence"]);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
   }


  ngOnInit(): void {
  }

}
