import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Audio } from './audio';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  private apiServerUrl = 'http://127.0.0.1:8080/TextVoice';

  constructor(private http: HttpClient) { }

  public getAudios(): Observable<Audio[]> {
    return this.http.get<Audio[]>(`${this.apiServerUrl}/fetch/voice`);
  }

  // public getAudioById(idnum: number): Observable<Audio> {
  //   return this.http.get<Audio>(`${this.apiServerUrl}/Audio/${idnum}`);
  // }

  public recordAudio(audio: FormData): Observable<Audio> {
    return this.http.post<Audio>(`${this.apiServerUrl}/record/voice`, audio);
  }

  public sendAudioFile = (file: string | Blob) => {
    const formData = new FormData();
    formData.append('file', file);
    return fetch(`${this.apiServerUrl}/upload`, {
      method: 'POST',
      body: formData
    });
  };

}
