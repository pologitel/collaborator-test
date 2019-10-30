import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/authenticate/components/login/login.component';
import { ListKnowledgeComponent } from './modules/list-knowledge/components/list-knowledge/list-knowledge.component';
import { NotFoundComponent } from './modules/not-found/components/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: ''
}, {
  path: 'authenticate',
  component: LoginComponent
}, {
  path: 'list-knowledge',
  component: ListKnowledgeComponent
}, {
  path: '**',
  component: NotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
