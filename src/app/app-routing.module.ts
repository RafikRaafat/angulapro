import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';



const routes: Routes = [
{path:"",component:HomeComponent},
{path:"about",component:AboutusComponent},

{path:"Contact",loadChildren:()=>import('./Contact/Contact.module').then(d=>d.ContacttModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
