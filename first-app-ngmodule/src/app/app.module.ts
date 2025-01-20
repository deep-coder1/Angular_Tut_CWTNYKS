import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { HeaderComponent } from './main-app/header/header.component';
import { FooterComponent } from './main-app/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
