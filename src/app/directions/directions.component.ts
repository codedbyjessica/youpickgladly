import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.scss']
})
export class DirectionsComponent implements OnInit {

@Input() origin;
@Input() destination;
@Input() passRadius;
@Output() emitShowDirections = new EventEmitter();
public steps;
public legs;
public directions = false;
public travelMode;
model = 'WALKING';

  constructor() { 

   }

  ngOnInit() {
  this.directions = false;
  }

  ngOnChanges() {
    this.getRadius();
  }

  getDirectionsInfo(response){
    this.legs = response;
    this.steps = response.steps;
  }

  showDirections(){
    this.directions = !this.directions
    this.emitShowDirections.emit(this.directions)
  }

  getRadius(){
    if( this.passRadius === 1500 ){
      this.travelMode = "WALKING";
    } else {
      this.travelMode = "DRIVING";
    }
  }

}
