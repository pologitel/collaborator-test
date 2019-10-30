import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@shared/modules/material/material.module';
import { SharedModule } from '@shared/shared.module';
import { ListKnowledgeComponent } from './components/list-knowledge/list-knowledge.component';
import { ListKnowledgeItemComponent } from './components/list-knowledge-item/list-knowledge-item.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    ListKnowledgeComponent,
    ListKnowledgeItemComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ]
})
export class ListKnowledgeModule { }
