import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TranslatedSentence } from '../models/translated-sentence';

@Injectable({
  providedIn: 'root'
})
export class TranslatedSentenceService {

  private apiServerUrl = 'http://localhost:8080/TextVoice';


  constructor(private http: HttpClient) { }

  /**
   * getAllTranslatedSentences
 : Observable<TranslatedSentence>  */
  public getAllTranslatedSentences(page:number, size: number): Observable<TranslatedSentence[]> {
    return this.http.get<TranslatedSentence[]>(`${this.apiServerUrl}/fetch/translatedsentence?pageNo=${page-1}&size=${size}`);
  }

  /**
   * totalTranslatedSentences
   */
  public totalTranslatedSentences(): Observable<TranslatedSentence[]> {
    return this.http.get<TranslatedSentence[]>(`${this.apiServerUrl}/all/translatedsentence`);
  }
}
