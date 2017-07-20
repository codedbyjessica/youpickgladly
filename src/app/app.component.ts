import { Component, OnInit } from '@angular/core';
import { ZomatoService } from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public restaurants
  public myLat
  public myLong
  public cuisineChoices = []
  public cuisineString
  public cuisine
  public radius = "&radius=10000"
  public price
  public sort

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


    // price
    if(this.price){
      this.sort = '&sort=cost&order='+ this.price
    }else{this.sort="&sort=real_distance&order=desc"}

    if(this.myLat){
      this.api.getData(this.myLat, this.myLong, this.cuisine, this.radius, this.sort).subscribe(res => {
      console.log(res.restaurants);
      this.restaurants = res.restaurants
    });
    } else{
      console.log("where u at")
    }
  }

  

  ngOnInit(){
    
  }


}


