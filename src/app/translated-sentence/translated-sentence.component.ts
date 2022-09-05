import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslatedSentence } from '../models/translated-sentence';
import { Audio } from '../models/audio';
import { TranslatedSentenceService } from '../services/translated-sentence.service';

@Component({
  selector: 'app-translated-sentence',
  templateUrl: './translated-sentence.component.html',
  styleUrls: ['./translated-sentence.component.css'],
})
export class TranslatedSentenceComponent implements OnInit {
  public translatedSentences: TranslatedSentence[] = [];
  public audios: Audio[] = [];
  page: number = 1;
  total: number = 0;
  size: number = 10;

  constructor(private translatedService: TranslatedSentenceService) {}

  ngOnInit(): void {
    this.getAllTranslatedSentences();
    this.totalTranslatedSentences();
  }

  /**
   * getAllTranslatedSentences
   */
  public getAllTranslatedSentences() {
    this.translatedService.getAllTranslatedSentences(this.page, this.size).subscribe(
      (response) => {
        this.translatedSentences = response;
        console.log(this.size);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  /**
   * totalTranslatedSentences
   */
  public totalTranslatedSentences() {
    this.translatedService.totalTranslatedSentences().subscribe(
      (response) => {
        this.total = response.length;
        console.log(this.total);
      }
    );
  }

  pageChangeEvent(event: number) {
    this.page = event;

    this.getAllTranslatedSentences();
  }
}
