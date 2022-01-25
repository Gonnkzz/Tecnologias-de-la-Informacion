import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRountingModule, AppRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';

import { ArticulosComponent } from './components/articulos/articulos.component';
import { HomeComponent } from './components/home/home.component';
import { ExternalComponent } from './components/externals/external/external.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponent,
    HomeComponent,
    ExternalComponent
  ],
  imports: [
    BrowserModule,
    AppRountingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AppRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
