import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './Contact-routing.module';
import { ContactaddComponent } from './Contactadd/Contactadd.component';
import { ContactlistComponent } from './Contactlist/Contactlist.component';
import { ContacteditComponent } from './Contactedit/Contactedit.component';
import { ContactdeleteComponent } from './Contactdelete/Contactdelete.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ContactaddComponent, ContactlistComponent, ContacteditComponent, ContactdeleteComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule
  ]
})
export class ContacttModule { }
 