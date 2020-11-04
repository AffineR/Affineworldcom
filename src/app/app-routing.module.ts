import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component'
import { FAQComponent } from './faq/faq.component';
import { ContectComponent } from './contect/contect.component';
import { APIComponent } from './api/api.component';
import { LoginComponent } from './login/login.component';
import { LoginwithmailComponent } from './loginwithmail/loginwithmail.component';
import { BlogComponent } from './blog/blog.component';
import { AddPostComponent } from './add-post/add-post.component';

const routes: Routes = [
  {
    path:'',redirectTo:'Home',pathMatch:'full'
  },
  {
    path:'Home',component:HomeComponent
  },
  {
    path:'about',component:AboutusComponent
  },
  {
    path:'faq',component:FAQComponent
  },
  {
    path:'contect',component:ContectComponent
  },
  {
    path:'api',component:APIComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'loginwithemail',component:LoginwithmailComponent
  },
  {
    path:'blog',component:BlogComponent
  },
  {
    path:'addpost',component:AddPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
