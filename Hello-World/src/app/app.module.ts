import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HerosListComponent } from './components/heros-list/heros-list.component';
import { TopNavBarComponent } from './components/top-nav-bar/top-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HerosListComponent,
    TopNavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
