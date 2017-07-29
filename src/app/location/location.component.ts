import { Component, OnInit, ElementRef, NgZone, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from "@angular/forms";
import { MapsAPILoader } from "@agm/core";
import {} from '@types/googlemaps'

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  @Input() locationNotFound;
  @Output() myLatLongPlace = new EventEmitter();

  public myLat: number;
  public myLong: number;
  public myLocation;
  public searchControl: FormControl;
  public zoom: number;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    console.log(this.locationNotFound)
    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    // this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        // types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set myLat, myLong and zoom
          this.myLat = place.geometry.location.lat();
          this.myLong = place.geometry.location.lng();
          this.myLocation = {
            lat: this.myLat, 
            long: this.myLong, 
            name: place.name
          };
          // this.zoom = 12;
          this.myLatLongPlace.emit(this.myLocation)

        });
      });
    });
  }

}