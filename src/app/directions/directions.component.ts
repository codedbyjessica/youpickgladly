import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.scss']
})
export class DirectionsComponent implements OnInit {

@Input() origin;
@Input() destination;
public steps;
public legs;
public directions = false;

  constructor() { }

  ngOnInit() {
    console.log(this.origin, this.destination)
  }

  ngOnChanges() {
    this.directions = false;
  }

  getDirectionsInfo(response){
    this.legs = response;
    this.steps = response.steps;
    console.log("heree", this.steps)
  }

  showDirections(){
    console.log(this.destination)
    this.directions = !this.directions
  }

}
