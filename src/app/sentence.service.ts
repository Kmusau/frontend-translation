import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sentence } from './sentence';

@Injectable({
  providedIn: 'root'
})
export class SentenceService {

  private apiServerUrl = 'http://localhost:8080/TextVoice';

  constructor(private http: HttpClient) { }

  public getAllSentences(): Observable<Sentence[]> {
    return this.http.get<Sentence[]>(`${this.apiServerUrl}/fetch/sentence`);
  }
}
