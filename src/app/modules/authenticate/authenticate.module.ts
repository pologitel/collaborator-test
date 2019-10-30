import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticateComponent } from './components/authenticate/authenticate.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    AuthenticateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AuthenticateModule { }
