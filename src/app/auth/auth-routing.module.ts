import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {ResetPasswordComponent} from './components/reset-password/reset-password.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProfileComponent} from './components/profile/profile.component';
import {AddTitleComponent} from './components/add-title/add-title.component';
import {DataChangesGuard} from '../helpers/can-deactivated.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'add-title', component: AddTitleComponent, canDeactivate: [DataChangesGuard]},
  // otherwise redirect to home
  {path: '**', redirectTo: ''}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports:
    [RouterModule]
})

export class AuthRoutingModule {
}
