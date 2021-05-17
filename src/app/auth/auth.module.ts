import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {ResetPasswordComponent} from './components/reset-password/reset-password.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProfileComponent } from './components/profile/profile.component';
import { AddTitleComponent } from './components/add-title/add-title.component';
import {DataChangesGuard} from '../helpers/can-deactivated.guard';


@NgModule({
  declarations: [
    LoginComponent, RegisterComponent, ResetPasswordComponent, ProfileComponent, AddTitleComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ],

  providers: [DataChangesGuard],
})
export class AuthModule {
}
