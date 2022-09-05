import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BodyComponent } from './body/body.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { PlayerComponent } from './player/player.component';
import { SecurityComponent } from './security/security.component';
import { SentenceComponent } from './sentence/sentence.component';
import { TranslatedSentenceComponent } from './translated-sentence/translated-sentence.component';
import { UsersComponent } from './users/users.component';
import { VoiceComponent } from './voice/voice.component';

const routes: Routes = [
  {path: "", component: BodyComponent},
  {path: "authenticate", component: SecurityComponent},
  {path: "users", component: UsersComponent},
  {path: "audio", component: VoiceComponent},
  {path: "translated-sentence", component: TranslatedSentenceComponent, canActivate: [AuthGuard]},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "player", component: PlayerComponent, canActivate: [AuthGuard]},
  {path: "sentence", component: SentenceComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
