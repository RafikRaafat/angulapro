import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactlistComponent } from './Contactlist/Contactlist.component';
import { ContactaddComponent } from './Contactadd/Contactadd.component';
import { ContacteditComponent } from './Contactedit/Contactedit.component';
import { ContactdeleteComponent } from './Contactdelete/Contactdelete.component';


const routes: Routes = [
  {path:"",component:ContactlistComponent},
  {path:"add",component:ContactaddComponent},
  {path:"edit/:id",component:ContacteditComponent},
  {path:"delete/:id",component:ContactdeleteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
