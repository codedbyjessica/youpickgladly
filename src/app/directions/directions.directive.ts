
import {GoogleMapsAPIWrapper} from '@agm/core';
import { Directive, Input, Output, EventEmitter } from '@angular/core';
declare var google: any;

@Directive({
  selector: '<agm-map-directions>'
})
export class DirectionsMapDirective {

    @Output() directionInfo = new EventEmitter();

  @Input() origin;
  @Input() destination;
  @Input() travelMode;

  public actualDirections;

  constructor (private gmapsApi: GoogleMapsAPIWrapper) {}

  ngOnInit(){
    this.getDirections()
  }

  ngOnChanges(){
      this.getDirections();
  }
  
  getDirections() {
    this.gmapsApi.getNativeMap().then(map => {
        var directionsService = new google.maps.DirectionsService;
var directionsDisplay = new google.maps.DirectionsRenderer;
directionsDisplay.setMap(map);
        directionsService.route({
        origin: {lat: this.origin.latitude, lng: this.origin.longitude},
        destination: {lat: this.destination.latitude, lng: this.destination.longitude},
        waypoints: [],
        optimizeWaypoints: true,
        travelMode: this.travelMode
    }, (response, status) => {
            if (status === 'OK') {
                this.actualDirections = response.routes[0].legs[0];
                this.getActualDirections(this.actualDirections);
                console.log("legs", this.actualDirections.start_address)
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        });

    });
  }

  getActualDirections(directions){
    this.directionInfo.emit(directions)
  } 
    

}