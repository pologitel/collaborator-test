import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@shared/modules/material/material.module';
import { SharedModule } from '@shared/shared.module';
import { HeaderComponent } from './root-components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ListKnowledgeModule, AuthenticateModule } from './modules';
import { NotFoundModule } from './modules/not-found/not-found.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ListKnowledgeModule,
    AuthenticateModule,
    NotFoundModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
