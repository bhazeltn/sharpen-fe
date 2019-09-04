import { HttpClientModule } from '@angular/common/http';
import { SkaterService } from './skaters/skater.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule,
  MatButtonModule, MatCardModule, MatGridListModule} from '@angular/material';
import { SkatersComponent } from './skaters/skaters.component';

@NgModule({
  declarations: [
    AppComponent,
    SkatersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [
    SkaterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
