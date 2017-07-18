import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { ZomatoService } from "./app.service";
import { LocationComponent } from './location/location.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent
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
  providers: [ZomatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
