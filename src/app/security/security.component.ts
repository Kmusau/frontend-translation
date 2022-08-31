import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtClientService } from '../jwt-client.service';
import { Sentence } from '../sentence';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  authRequest:any = {
    "username": "musau",
    "password": "100"
  };

  public token: any;
  public sentences: Sentence[] = [];

  constructor(private jwtclient: JwtClientService, private router: Router) { }

  ngOnInit() {
    this.getAccessToken(this.authRequest)
  }

  public getAccessToken(authRequest: any) {
    localStorage.clear();
    this.jwtclient.generateToken(authRequest).subscribe(
      (response: string) => {
        console.log(response);
        localStorage.setItem("token", response);
        // this.router.navigate(["/"]);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  /**
   * getAllSentences
   */
  public getAllSentences(token: any) {
    this.jwtclient.getAllSentences(token).subscribe(
      (response: Sentence[]) => {
        this.sentences = response;
        console.log(this.sentences);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
