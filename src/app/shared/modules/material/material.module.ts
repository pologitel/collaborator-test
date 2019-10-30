import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

const MATERIAL_MODULES: any[] = [
  MatSelectModule,
  MatCardModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatButtonModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ...MATERIAL_MODULES
  ]
})
export class MaterialModule { }
