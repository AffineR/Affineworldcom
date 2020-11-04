import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnecttoIBMService 
{

  BaseUrl="http://localhost:3000/";
  constructor(private http:HttpClient) { }

  savedata(user):Observable<any>
  {
    let url=this.BaseUrl+"insertto";
    return this.http.post(url, user);
  }
 
  savepost(value: any):Observable<any>
  {
    let url=this.BaseUrl+"insertto";
    return this.http.post(url,value);
  }

  getalldata():Observable<any>
  {
    let url=this.BaseUrl+"api/resource";
    return this.http.get(url);
  }

}
