import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { skillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import {  CertComponent } from './cert/cert.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
  {path:"about" , component:AboutComponent},
  {path:"resume" , component:EducationComponent},
  {path:"services" , component:skillsComponent},
  {path:"testimonials" , component:CertComponent},
  {path:"contact" , component:ContactComponent},
  {path:"**",component:AboutComponent,pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
