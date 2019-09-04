
import { SkaterService } from './shared/skater.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule,
  MatButtonModule, MatCardModule, MatGridListModule} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { SkatersComponent } from './skaters/skaters.component';
import { SkaterListComponent } from './skaters/skater-list/skater-list.component';
import { EditSkaterComponent } from './skaters/edit-skater/edit-skater.component';
import { AddSkaterComponent } from './skaters/add-skater/add-skaters.components';


@NgModule({
  declarations: [
    AppComponent,
    SkatersComponent,
    SkaterListComponent,
    EditSkaterComponent,
    AddSkaterComponent
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
    MatGridListModule,
    ReactiveFormsModule
  ],
  providers: [
    SkaterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
