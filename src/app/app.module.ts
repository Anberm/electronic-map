import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { China3DComponent } from './china-3d/china-3d.component';
import { FmMapComponent } from './fm-map/fm-map.component';
import { DrawMapComponent } from './draw-map/draw-map.component';
import { AreaMapComponent } from './area-map/area-map.component';

@NgModule({
  declarations: [
    AppComponent,
    China3DComponent,
    FmMapComponent,
    DrawMapComponent,
    AreaMapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
