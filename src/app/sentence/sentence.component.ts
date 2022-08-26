import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Sentence } from '../sentence';
import { SentenceService } from '../sentence.service';

@Component({
  selector: 'app-sentence',
  templateUrl: './sentence.component.html',
  styleUrls: ['./sentence.component.css']
})
export class SentenceComponent implements OnInit {

  private sentences: Sentence[] = [];

  constructor(private sentenceService: SentenceService) { }

  ngOnInit(): void {
    this.getAllSentences();
  }

  /**
   * getAllSentences
   */
  public getAllSentences() {
    this.sentenceService.getAllSentences().subscribe(
      (response: Sentence[]) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
