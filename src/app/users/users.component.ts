import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Sentence } from '../models/sentence';
import { SentenceService } from '../services/sentence.service';
import { Users } from '../models/users';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  closeResult = '';
  public users: Users[] = [];
  public sentences: Sentence[] = [];

  constructor(private userService: UsersService, private sentenceService: SentenceService) { }

  ngOnInit() {
    this.getAllUsers();
    this.getAllSentences();

  }

  /**
   * getAllUsers
 : void  */
  public getAllUsers(): void {
    this.userService.getAllUsers().subscribe(
      (response: Users[]) => {
        this.users = response;
        console.log(this.users);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getAllSentences() {
    this.sentenceService.getAllSentences().subscribe(
      (response: Sentence[]) => {
        this.sentences = response;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
