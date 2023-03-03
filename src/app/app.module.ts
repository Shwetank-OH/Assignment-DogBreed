import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BreedComponent } from './breed/breed.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import {HttpClientModule} from '@angular/common/http';
import { ApiService } from './app.service';
import { BreedPipe } from './breed/breed.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BreedComponent,
    ContactComponent,
    AboutComponent,
    BreedPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
