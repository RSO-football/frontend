import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { UporabnikiComponent } from './uporabniki/uporabniki.component';
import { IgriscaComponent } from './igrisca/igrisca.component';
import { IgralciComponent } from './igralci/igralci.component';

import { PostavkeComponent } from './postavke/postavke.component';
import { KoledarComponent } from './koledar/koledar.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RekvizitiComponent } from './rekviziti/rekviziti.component';

@NgModule({
  declarations: [
    AppComponent,
    UporabnikiComponent,
    IgriscaComponent,
    IgralciComponent,
    PostavkeComponent,
    KoledarComponent,
    RekvizitiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatSelectModule,
    CommonModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
