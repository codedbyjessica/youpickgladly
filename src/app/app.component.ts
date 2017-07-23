import { Component, OnInit } from '@angular/core';
import { ZomatoService } from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public results
  public firstRestaurant
  public restaurants = []

  public markers=[]

  public myLat
  public myLong

  public midLat
  public midLong

  public restaurantLat
  public restaurantLong

  public cuisineChoices = []
  public cuisineString
  public cuisine
  public radius = "&radius=10000"
  public price
  public sort

  public dataHere = false;
  public noRestaurantsFound = false;
  public locationNotFound = false;
  public allCuisines

  constructor(private api: ZomatoService) {}

  myLocation(location){
    console.log(location)
    this.myLat = location.lat
    this.myLong = location.long
  }

  selectAllCuisines(isSelected){
    this.allCuisines = isSelected
    console.log(this.allCuisines)
  }

  myCuisine(cuisineArray){
    this.cuisineChoices = cuisineArray;
  }

  myPrice(price){
    this.price = price
    console.log(price)
  }

  myRadius(radius){
    this.radius = "&radius=" + radius
  }

  getFood(){
    this.restaurants = []
    // cuisine array
    if(this.allCuisines === true){
      this.cuisine = '';
      console.log(this.cuisine)
    }else{
      if (this.cuisineChoices.length < 1){
        this.cuisine = '';
      }else{
        this.cuisineString = this.cuisineChoices.join(",")
        this.cuisine = "&cuisines=" + this.cuisineString
      }
    }

    if(this.myLat){
      this.locationNotFound = false;
      this.api.getData(this.myLat, this.myLong, this.cuisine, this.radius).subscribe(res => {
        this.dataHere = true;
        this.results = res.restaurants
        // console.log(this.results)
        this.getRestaurants(this.results)
      });

    } else{

      console.log("where u at")
            this.locationNotFound = true;
    }

  }

  getRestaurants(results){


    results.forEach(restaurant => {
      if(!this.price){
        this.restaurants.push(restaurant)
      }
      else if(restaurant.restaurant.price_range <= this.price){
        this.restaurants.push(restaurant)
      }
    });
    console.log(this.restaurants)

    if(this.restaurants.length <= 0){
      this.noRestaurantsFound = true
      console.log(this.dataHere, this.noRestaurantsFound)
    }else{
      this.firstRestaurant = this.restaurants[0].restaurant
      this.restaurantLat = Number(this.firstRestaurant.location.latitude)
      this.restaurantLong = Number(this.firstRestaurant.location.longitude)

      this.midLat = (this.myLat + this.restaurantLat)/2;
      this.midLong = (this.myLong + this.restaurantLong)/2;
    }
  }

  getRestaurantLocation(i){
    this.restaurants.splice(0, 0, this.restaurants.splice(i, 1)[0]).join()
    console.log(i)
    console.log(this.restaurants)
      this.firstRestaurant = this.restaurants[0].restaurant
      this.restaurantLat = Number(this.firstRestaurant.location.latitude)
      this.restaurantLong = Number(this.firstRestaurant.location.longitude)

      this.midLat = (this.myLat + this.restaurantLat)/2;
      this.midLong = (this.myLong + this.restaurantLong)/2;

  }

  // getRestaurantLocation(location){
  //   console.log(location)

  //   this.restaurantLat = Number(location.latitude)
  //   this.restaurantLong = Number(location.longitude)
  //   console.log(this.restaurantLat)

  //   this.midLat = (this.myLat + this.restaurantLat)/2;
  //   this.midLong = (this.myLong + this.restaurantLong)/2;
  // }

  moveToFirst(from, to){

  }





  ngOnInit(){

  }



}


