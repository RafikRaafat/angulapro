import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/Models/IContact';
import { ContactservService } from 'src/app/Service/Contactserv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Contactadd',
  templateUrl: './Contactadd.component.html',
  styleUrls: ['./Contactadd.component.css']
})
export class ContactaddComponent implements OnInit {

  constructor(private ser:ContactservService ,private rout:Router) { }

  ngOnInit(): void {
  }

  obj:IContact={id:0 , Name:null , MobNumber:null}


  mysave(){
    this.ser.AddContact(this.obj).subscribe({
      next: (item) => { },
      error:(err)=>{console.log(err);},
      complete: () => {this.rout.navigate(['/Contact/']);}
    })

  }


}
