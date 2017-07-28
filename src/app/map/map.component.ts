import { Component, NgModule, NgZone, OnInit, ViewChild, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AgmCoreModule, MapsAPILoader, AgmMap, AgmMarker } from '@agm/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent  {

  @Input() myLat: number;
  @Input() myLong: number;

  @Input() restaurantLat: number;
  @Input() restaurantLong: number;

  @Input() latitude
  @Input() longitude

  public searchControl: FormControl;
  public zoom: number;
  
  public searchElementRef;
  
  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {}
  
  ngOnInit() {
    this.zoom = 14;
  }


}