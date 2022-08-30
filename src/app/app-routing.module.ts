import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { SecurityComponent } from './security/security.component';
import { SentenceComponent } from './sentence/sentence.component';
import { TranslatedSentenceComponent } from './translated-sentence/translated-sentence.component';
import { UsersComponent } from './users/users.component';
import { VoiceComponent } from './voice/voice.component';

const routes: Routes = [
  {path: "authenticate", component: SecurityComponent},
  {path: "users", component: UsersComponent},
  {path: "audio", component: VoiceComponent},
  {path: "translated-sentence", component: TranslatedSentenceComponent},
  {path: "sentence", component: SentenceComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
