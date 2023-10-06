import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { PostComponent } from './post/post.component';
import { IbanComponent } from './iban/iban.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'authorization', component: AuthorizationComponent},
  {path: 'post', component: PostComponent},
  {path: 'iban', component: IbanComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
