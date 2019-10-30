import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TemplateVariablesDirective } from './directives/template-variables.directive';

@NgModule({
  declarations: [
    TemplateVariablesDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AngularFontAwesomeModule
  ]
})
export class SharedModule { }
