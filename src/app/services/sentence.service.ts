import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sentence } from '../models/sentence';
import { TranslatedSentence } from '../models/translated-sentence';

@Injectable({
  providedIn: 'root'
})
export class SentenceService {

  private apiServerUrl = 'http://localhost:8080/TextVoice';

  constructor(private http: HttpClient) { }

  public getAllSentences(page: number, size: number): Observable<Sentence[]> {
    return this.http.get<Sentence[]>(`${this.apiServerUrl}/fetch/sentence?pageNo=${page-1}&size=${size}`);
  }

  public getTotalSentences(): Observable<Sentence[]> {
    return this.http.get<Sentence[]>(`${this.apiServerUrl}/all/sentence`);
  }

  public translateSentence(translated_sentence_id: number, translatedSentence: TranslatedSentence): Observable<TranslatedSentence> {
    return this.http.post<TranslatedSentence>(`${this.apiServerUrl}/translate/sentence/${translated_sentence_id}`, translatedSentence)
  }
}
