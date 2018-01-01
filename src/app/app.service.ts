import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ZomatoService {


private apiUrl

  constructor (
    private http: Http
  ) {}

  getData(lat, long, cuisine, radius):Observable<any> {
    console.log(cuisine)
    this.apiUrl = 'https://developers.zomato.com/api/v2.1/search?' + 'lat=' + lat + '&lon=' + long + cuisine + radius;
    return this.http.get(this.apiUrl, {
        headers: new Headers(
            {
                'user-key': '7a5271a9bcd39c98815f81510b921ec4',
                'Accept': 'application/json'
            }
        )
    })
    .map(response => response.json())
  }


  getDirections(myLat, myLong, restaurantLat, restaurantLong):Observable<any> {
    const googleKey = 'AIzaSyAEIes2MFy1zVNr1RIQAnTGnb9H79TfCwk';
    let directionsUrl = 'https://maps.googleapis.com/maps/api/directions/json?origin=' + myLat + ',' +  myLong + '&destination=' + restaurantLat + ',' + restaurantLong +'&key=' + googleKey;
    return this.http.get(directionsUrl, {})
    .map(response => response.json())
  }

}


