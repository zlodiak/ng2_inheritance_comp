import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SimplePaginationComponent } from './simple-pagination/simple-pagination.component';
import { MyPaginationComponent } from './my-pagination/my-pagination.component';


@NgModule({
  declarations: [
    AppComponent,
    SimplePaginationComponent,
    MyPaginationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
