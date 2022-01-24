import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyPalComponent } from './my-pal/my-pal.component';
import { GeometryComponent } from './geometry/geometry.component';

@NgModule({
  declarations: [
    AppComponent,
    MyPalComponent,
    GeometryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
