import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {WeatherComponent} from './weather/weather.component';
import {SharedModule} from './shared/shared.module';
import {WeatherDetailsComponent} from './weather-details/weather-details.component';
import { WeatherIconComponent } from './weather-icon/weather-icon.component';

@NgModule({
  declarations: [
    WeatherComponent,
    WeatherDetailsComponent,
    WeatherIconComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [WeatherComponent],
  entryComponents: [
  ],
})
export class AppModule {

  constructor(private injector: Injector) {
  }

}
