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

  public origin
  public destination

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
    this.myLat = location.lat
    this.myLong = location.long
    this.origin  = { latitude: this.myLat, longitude: this.myLong };
  }

  selectAllCuisines(isSelected){
    this.allCuisines = isSelected
  }

  myCuisine(cuisineArray){
    this.cuisineChoices = cuisineArray;
  }

  myPrice(price){
    this.price = price
  }

  myRadius(radius){
    this.radius = "&radius=" + radius
  }

  getFood(){
    this.restaurants = []
    // cuisine array
    if(this.allCuisines === true){
      this.cuisine = '';
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
      this.getRestaurantData();
    }
  }

  getRestaurantLocation(i){
    this.restaurants.splice(0, 0, this.restaurants.splice(i, 1)[0]).join()
    console.log(i)
    console.log(this.restaurants)
      this.getRestaurantData();

  }

  // getRestaurantLocation(location){
  //   console.log(location)

  //   this.restaurantLat = Number(location.latitude)
  //   this.restaurantLong = Number(location.longitude)
  //   console.log(this.restaurantLat)

  //   this.midLat = (this.myLat + this.restaurantLat)/2;
  //   this.midLong = (this.myLong + this.restaurantLong)/2;
  // }

  getRestaurantData(){
      this.firstRestaurant = this.restaurants[0].restaurant
      this.restaurantLat = Number(this.firstRestaurant.location.latitude)
      this.restaurantLong = Number(this.firstRestaurant.location.longitude)

      this.destination  = { latitude: this.restaurantLat, longitude: this.restaurantLong };


      this.midLat = (this.myLat + this.restaurantLat)/2;
      this.midLong = (this.myLong + this.restaurantLong)/2;
  }





  ngOnInit(){

  }



}


