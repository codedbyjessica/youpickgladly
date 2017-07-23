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
  //   //set google maps defaults
    this.zoom = 14;

    // if ("geolocation" in navigator) {
    //   navigator.geolocation.getCurrentPosition((position) => {
    //     this.latitude = position.coords.latitude;
    //     this.longitude = position.coords.longitude;
    //   });
    // }

console.log(this.myLat, this.myLong, this.restaurantLat, this.restaurantLong)

console.log(this.latitude, this.longitude)
    
  //   //create search FormControl
  //   this.searchControl = new FormControl();
    
  //   //set current position
  //   this.setCurrentPosition();
    
  //   //load Places Autocomplete
  //   this.mapsAPILoader.load().then(() => {
  //     let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
  //       types: ["address"]
  //     });
  //     autocomplete.addListener("place_changed", () => {
  //       this.ngZone.run(() => {
  //         //get the place result
  //         let place: google.maps.places.PlaceResult = autocomplete.getPlace();
  
  //         //verify result
  //         if (place.geometry === undefined || place.geometry === null) {
  //           return;
  //         }
          
  //         //set latitude, longitude and zoom
  //         this.latitude = place.geometry.location.lat();
  //         this.longitude = place.geometry.location.lng();
  //         this.zoom = 12;
  //       });
  //     });
  //   });

  
      }
  
  // private setCurrentPosition() {
  //   if ("geolocation" in navigator) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       this.latitude = position.coords.latitude;
  //       this.longitude = position.coords.longitude;
  //       this.zoom = 12;
  //     });
  //   }
  // }

clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: MouseEvent) {
    // this.markers.push({
    //   lat: $event.coords.lat,
    //   lng: $event.coords.lng
    // });
  }
  
  markerDragEnd(m, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
  markers = [
	  {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: 'A',
		  draggable: true
	  },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
		  label: 'B',
		  draggable: false
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: 'C',
		  draggable: true
	  }
  ]


// just an interface for type safety.



}