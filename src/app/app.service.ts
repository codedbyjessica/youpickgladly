import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ZomatoService {


private apiUrl

  constructor (
    private http: Http
  ) {}

  getData(lat, long, cuisine, radius):Observable<any> {
    this.apiUrl = 'https://developers.zomato.com/api/v2.1/search?' + "lat=" + lat + "&lon=" + long + cuisine + radius;
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

}


