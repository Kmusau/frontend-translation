import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Sentence } from '../models/sentence';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  private apiServerUrl = 'http://127.0.0.1:8080/TextVoice';

  constructor(private http: HttpClient) { }

  public generateToken(request: any): Observable<string> {
    return this.http.post<string>(`${this.apiServerUrl}/authenticate`, request, {responseType: "text" as "json"});
  }

  public getAllSentences(token: string): Observable<Sentence[]> {
    let tokenStr = "Bearer "+token;
    const header = new HttpHeaders().set("Authorization", tokenStr);
    return this.http.get<Sentence[]>(`${this.apiServerUrl}/fetch/sentence`, {headers:header});
  }

  public loggedIn() {
    return !!localStorage.getItem('token');
  }

  /**
   * getToken
   */
  public getToken() {
    return localStorage.getItem('token');
  }

}
