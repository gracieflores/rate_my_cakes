import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {
  @Input() onImgClickEvent: any;
  @Input() average: Number;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    // this.getAverage;
    // this.average;
  }

  // getAverage() {
  //   var cake = this.onImgClickEvent.reviews.rating
  //   var sum = 0;
  //   for (var x = 0; x < cake.length; x++){
  //     sum += x;
  //   }
  //   this.average = (sum/cake.length);
  //   console.log(this.average)
  //   }
  //   //var cake = this.onImgClickEvent;
  //   //create for loop that loops over cake.reviews
  //   // do the average and set it equal to this.average
  }
  

