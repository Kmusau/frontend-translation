import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiServerUrl = 'http://127.0.0.1:8080/TextVoice';

  constructor(private http: HttpClient) { }

    /**
   * getAllUsers
   */
     public getAllUsers(): Observable<Users[]> {
      return this.http.get<Users[]>(`${this.apiServerUrl}/fetch/users`);
    }

    /**
     * createUser
 : Observable<Users>    */
    public createUser(user: Users): Observable<Users> {
      return this.http.post<Users>(`${this.apiServerUrl}/create/user`, user);
    }
}
