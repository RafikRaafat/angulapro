import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IContact } from '../Models/IContact';

@Injectable({
  providedIn: 'root'
})
export class ContactservService {

  constructor(private htp: HttpClient) { }

  GetAll(): Observable<IContact[]> {
    return this.htp.get<IContact[]>("http://localhost:52716/api/Client");
  }

  AddContact(obj: IContact): Observable<IContact> {
    return this.htp.post<IContact>("http://localhost:52716/api/Client", obj);
  }


  GetById(id :number): Observable<IContact> {
    return this.htp.get<IContact>("http://localhost:52716/api/Client/"+id);
  }
  EditContact(obj:IContact):Observable<IContact>{
    return this.htp.put<IContact>("http://localhost:52716/api/Client", obj);

  }


}
