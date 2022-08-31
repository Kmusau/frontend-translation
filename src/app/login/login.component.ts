import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators , FormBuilder}  from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
// This is needed for validation
export class LoginComponent implements OnInit {
  reactiveForm: FormGroup;
  submitted: boolean = false;

  constructor(private FormBuilder:FormBuilder) {
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


  ngOnInit(): void {
  }

}
