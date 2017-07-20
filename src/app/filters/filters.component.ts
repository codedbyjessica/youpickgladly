import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @Output() go = new EventEmitter();
  @Output() cuisine = new EventEmitter();
  @Output() price = new EventEmitter();
  @Output() radius = new EventEmitter();
  @Output() selectAll = new EventEmitter();

  public allCuisines = false
  cuisineChoices = []

  constructor() { }

  ngOnInit() {
  }

  getFood() {
    this.go.emit()
  }

  allCuisineToggle(){
    this.selectAll.emit(this.allCuisines)
  }

  cuisineChoice(cuisineId){
    cuisineId.split(",").forEach(id => {
      const indexx = this.cuisineChoices.indexOf(id)
      if (indexx === -1) {
        this.cuisineChoices.push(id)
      }else {
        this.cuisineChoices.splice(indexx, 1);
      }
    });

    console.log(this.cuisineChoices)
    this.cuisine.emit(this.cuisineChoices)
  }

  priceChoice(choice): void {
      this.price.emit(choice)
  }

  distanceChoice(choice): void {
      this.radius.emit(choice)
  }

}
