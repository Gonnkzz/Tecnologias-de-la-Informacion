import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRountingModule, AppRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';

import { ArticulosComponent } from './components/articulos/articulos.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticulosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRountingModule,
    FormsModule
  ],
  providers: [AppRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
