import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})
export class ApiService{
  constructor(private _http:HttpClient){}
  getdata(){
    return this._http.get('https://dog.ceo/api/breed/hound/images');
  }
}
