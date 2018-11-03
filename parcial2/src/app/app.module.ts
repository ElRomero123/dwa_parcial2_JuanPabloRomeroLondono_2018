import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComicsGridComponent } from './comics-grid/comics-grid.component';
import { HttpClientModule } from '@angular/common/http';
import { ComicsHeaderComponent } from './comics-header/comics-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ComicsGridComponent,
    ComicsHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
