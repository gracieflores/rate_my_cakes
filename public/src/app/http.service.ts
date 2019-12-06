import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 

  }
  getCakes(){
    return this._http.get('/cakes');
  }
  getOneCake(id){
    return this._http.get(`/cake/${id}`);
  }
  addCake(newCake){
    return this._http.post('/cake', newCake);
  }
  editCake(id, cakeReview){
    console.log(id, cakeReview)
    return this._http.put(`cake/${id}`, cakeReview);
  }
}
