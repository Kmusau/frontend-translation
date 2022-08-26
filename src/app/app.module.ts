import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SentenceComponent } from './sentence/sentence.component';
import { SecurityComponent } from './security/security.component';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { UsersService } from './users.service';
import { SentenceService } from './sentence.service';
import { JwtClientService } from './jwt-client.service';
import { VoiceComponent } from './voice/voice.component';

@NgModule({
  declarations: [
    AppComponent,
    SentenceComponent,
    SecurityComponent,
    UsersComponent,
    VoiceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [ AuthGuard, UsersService, SentenceService, JwtClientService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
