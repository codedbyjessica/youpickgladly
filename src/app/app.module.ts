import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';

import { AppComponent } from './app.component';
import { ZomatoService } from "./app.service";
import { LocationComponent } from './location/location.component';
import { FiltersComponent } from './filters/filters.component';
import { HeaderComponent } from './header/header.component';
import { MapComponent } from './map/map.component';
import { DirectionsComponent } from './directions/directions.component';
import { DirectionsMapDirective } from "./directions/directions.directive";

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    FiltersComponent,
    HeaderComponent,
    MapComponent,
    DirectionsComponent,
    DirectionsMapDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey:"AIzaSyAEIes2MFy1zVNr1RIQAnTGnb9H79TfCwk",
      libraries: ['places']
    })
  ],
  providers: [ZomatoService, GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule { }
