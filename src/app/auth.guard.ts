import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtClientService } from './jwt-client.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private jwtService: JwtClientService) {}

  canActivate(): boolean {
      if (this.jwtService.loggedIn()) {
        return true;
      } else {
        this.router.navigate(["/users"])
        return false;
      }
  }
}
