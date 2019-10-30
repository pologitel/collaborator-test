import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appTemplateVariables]'
})
export class TemplateVariablesDirective {
  constructor() { }

  @Input('localTemplateVars') set localVariables( struct: any ) {
    if ( typeof struct === 'object' ) {
      Object.keys(struct).forEach((key: string) => {
        this[key] = struct[key];
      });
    }
  }
}
