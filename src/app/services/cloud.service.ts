import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Audio } from '../models/audio';

@Injectable({
  providedIn: 'root'
})
export class CloudService {

  private apiServerUrl = 'http://127.0.0.1:8080/TextVoice';

  constructor(private http: HttpClient) { }

  /**
   * name
   */
  public getFiles(page: number, size: number): Observable<Audio[]> {
    return this.http.get<Audio[]>(`${this.apiServerUrl}/fetch/voice?pageNo=${page-1}&size=${size}`)
  }

  public getTotalAudios(): Observable<Audio[]> {
    return this.http.get<Audio[]>(`${this.apiServerUrl}/all/voice`);
  }

  public getOneAudio(id: number): Observable<Audio> {
    return this.http.get<Audio>(`${this.apiServerUrl}/fetch/voice/${id}`);
  }

  public getSingleAudio(id: number): Observable<Audio> {
    return this.http.get<Audio>(`${this.apiServerUrl}/play/voice/${id}`);
  }
}
