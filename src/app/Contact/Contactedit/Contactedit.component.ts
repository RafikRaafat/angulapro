import { Component, OnInit } from '@angular/core';
import { ContactservService } from 'src/app/Service/Contactserv.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IContact } from 'src/app/Models/IContact';

@Component({
  selector: 'app-Contactedit',
  templateUrl: './Contactedit.component.html',
  styleUrls: ['./Contactedit.component.css']
})
export class ContacteditComponent implements OnInit {

  constructor(private ser: ContactservService, private rout: Router, private actrout: ActivatedRoute) { }

  ngOnInit(): void {
    this.display();
  }

  obj: IContact = {
    id: 0,
    Name: "",
    MobNumber:0
  }

  display() {

let x=this.actrout.snapshot.paramMap.get("id");
    this.ser.GetById(parseInt(x)).subscribe({
      next: (item) => {this.obj=item },
      error: (err) => { console.log(err); },
      complete: () => { }
    });
  }
  mysave(){
    this.ser.EditContact(this.obj).subscribe({
      next: (item) => { },
      error:(err)=>{console.log(err);},
      complete: () => {this.rout.navigate(['/Contact/']);}
    })

  }


}
