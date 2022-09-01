import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslatedSentence } from '../translated-sentence';
import { TranslatedSentenceService } from '../translated-sentence.service';

@Component({
  selector: 'app-translated-sentence',
  templateUrl: './translated-sentence.component.html',
  styleUrls: ['./translated-sentence.component.css']
})
export class TranslatedSentenceComponent implements OnInit {

  public translatedSentences: TranslatedSentence[] = [];

  constructor(private translatedService: TranslatedSentenceService) { }

  ngOnInit(): void {
    this.getAllTranslatedSentences();
  }

  /**
   * getAllTranslatedSentences
   */
  public getAllTranslatedSentences() {
    this.translatedService.getAllTranslatedSentences().subscribe(
      (response) => {
        this.translatedSentences = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    
  }

}
