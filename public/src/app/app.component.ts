import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { debug } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Rate My Cakes';
  cakes = [];
  cake: any;
  newCake: any;
  cakeReview: any;
  selectedCake: any;
  average: any;
  errs: any = [];

  constructor(private _httpService: HttpService){

  }
  ngOnInit(){
    this.getCakes();
    this.newCake = { baker_name: "", image_url: "" }
    this.cakeReview = { rating: "", comment: "" }
  }
  getCakes() {
    let observable = this._httpService.getCakes();
    observable.subscribe(data => {
      console.log("Got our cakes!", data)
      this.cakes = data['data'];
    });
  }
  onSubmit() {
    //console.log(this.newTask)
    let observable = this._httpService.addCake(this.newCake);
    observable.subscribe(data => {
      if(data['errors']){
        if(data['errors']['baker_name']['message'])
        this.errs.push(data['errors']['baker_name']['message'])
        if(data['errors']['image_url']['message'])
        this.errs.push(data['errors']['image_url']['message'])
        console.log("errors: ", this.errs)
      }
      else{
        console.log("this is new cake", this.newCake)
        console.log("Data from newCake: ", data)
      }
      //console.log("Got data from post back!", data);
      this.newCake = {baker_name: "", image_url: ""}
      
    });
  }
  addReview(id) {
    console.log(id)
    console.log(this.cakeReview)
    let observable = this._httpService.editCake(id, this.cakeReview);
    observable.subscribe(data => {
      console.log("Got our cake and new review", data);
      this.cakeReview = { rating: "", comment: "" }

    })
  }
  onImgClickEvent(id) {
    //console.log(id)
    let observable = this._httpService.getOneCake(id);
    observable.subscribe(data => {
      console.log("Got one cake", data)
      this.selectedCake = data;
      console.log(this.selectedCake['reviews'].length)
      console.log(this.selectedCake['reviews'][0].rating)
      var sum = 0;
    for (var x = 0; x < this.selectedCake['reviews'].length; x++){
      sum += this.selectedCake['reviews'][x].rating;
    }
    console.log(sum)
    this.average = (sum/this.selectedCake['reviews'].length);
    console.log(this.average)
    })
  }
}
// ./assets/name.jpg