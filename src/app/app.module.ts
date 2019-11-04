import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestApiComponent } from './api/test-api/test-api.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { CreateBookComponent } from './api/create-book/create-book.component';
import {ReactiveFormsModule} from '@angular/forms';
import { EditBookComponent } from './api/edit-book/edit-book.component';

@NgModule({
  declarations: [
    AppComponent,
    TestApiComponent,
    CreateBookComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
