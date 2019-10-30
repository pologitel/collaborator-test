import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListKnowledgeComponent } from './modules/list-knowledge/components/list-knowledge/list-knowledge.component';
import { NotFoundComponent } from './modules/not-found/components/not-found/not-found.component';
import { AuthenticateComponent } from './modules/authenticate/components/authenticate/authenticate.component';
import { AuthGuard } from '@shared/guards/auth.guard';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'authenticate'
}, {
  path: 'authenticate',
  component: AuthenticateComponent
}, {
  path: 'list-knowledge',
  component: ListKnowledgeComponent,
  canActivate: [ AuthGuard ]
}, {
  path: '**',
  component: NotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
