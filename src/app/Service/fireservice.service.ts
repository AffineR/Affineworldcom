import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from "@angular/fire/database";

@Injectable({
  providedIn: 'root'
})
export class FireserviceService {

  private dbPath = '/nurse-ovsm';

  constructor(
    private db:AngularFireDatabase
  ) { 
    this.addblog = db.list(this.dbPath);
  }
  addblog: AngularFireList<any>= null;

  savedata(data)
  {
    console.log(data);
    this.addblog.push(data);
  }

  // getalldata(): AngularFireList<any>
  // {
  //   return this.addblog.
  // }

}
