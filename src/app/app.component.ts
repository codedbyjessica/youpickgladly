import { Component, OnInit } from '@angular/core';
import { ZomatoService } from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public restaurants
  public myLat
  public myLong
  public cuisine
  public price
  public radius
  cuisineChoices = []


  public allCuisinesSelected = false

  constructor(private api: ZomatoService) {}

  myLocation(location){
    console.log(location)
    this.myLat = location.lat
    this.myLong = location.long
  }

  getFilter(){
    // this.cuisine
    // this.price
    this.getFood()
  }

  getFood(){
    // this.myLat = 43.6532
    // this.myLong = -79.3832
    this.cuisine = '177'

    if (this.cuisineChoices.length < 1){
      this.cuisine = undefined
    }else{
      this.cuisine = this.cuisineChoices.join(",")
      console.log(this.cuisine)
    }


    if(this.cuisine){
      this.cuisine = "&cuisines=" + this.cuisine
    }else{this.cuisine = ""}

    this.api.getData(this.myLat, this.myLong, this.cuisine, this.radius).subscribe(res => {
    console.log(res.restaurants);
    this.restaurants = res.restaurants
    });
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
  }

  priceChoice(choice): void {
      this.price = choice;
      console.log(this.price)
  }

  distanceChoice(choice): void {
      this.radius = "&radius=" + choice;
      console.log(this.radius)
  }

  ngOnInit(){
    
  }


}


