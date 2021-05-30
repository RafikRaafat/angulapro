import { Component, OnInit } from '@angular/core';
import { ContactservService } from 'src/app/Service/Contactserv.service';

@Component({
  selector: 'app-Contactlist',
  templateUrl: './Contactlist.component.html',
  styleUrls: ['./Contactlist.component.css']
})
export class ContactlistComponent implements OnInit {

  constructor(private ser:ContactservService) {

   }

  ngOnInit(): void {
    this.display();
  }

  alldata;
  display() {
    this.ser.GetAll().subscribe({
      next: (item) => { this.alldata = item; },
      error:(err)=>{console.log(err);},
      complete: () => {}
    });
  }

}
