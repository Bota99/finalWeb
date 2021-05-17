import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MainComponent} from './shared/components/main/main.component';

import {LoginComponent} from './auth/components/login/login.component';
import {RegisterComponent} from './auth/components/register/register.component';
import {ResetPasswordComponent} from './auth/components/reset-password/reset-password.component';
import {CatalogMangaComponent} from './shared/components/catalog-manga/catalog-manga.component';
import {CatalogManhwaComponent} from './shared/components/catalog-manhwa/catalog-manhwa.component';
import {CatalogManhuaComponent} from './shared/components/catalog-manhua/catalog-manhua.component';
import {ProfileComponent} from './auth/components/profile/profile.component';
import {AddTitleComponent} from './auth/components/add-title/add-title.component';
import {TitleComponent} from './shared/components/title/title.component';
import {AuthGuard} from './helpers/auth.guard';
import {DataChangesGuard} from './helpers/can-deactivated.guard';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
  {path: 'catalog-manga', component: CatalogMangaComponent},
  {path: 'catalog-manhwa', component: CatalogManhwaComponent},
  {path: 'catalog-manhua', component: CatalogManhuaComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'add-title', component: AddTitleComponent, canActivate: [AuthGuard], canDeactivate: [DataChangesGuard]},
  {path: 'title', component: TitleComponent},

  {path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
