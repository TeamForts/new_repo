import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainModule} from "./main/main.module";
import {HttpClientModule} from "@angular/common/http";
import {PreloaderComponent} from './common/preloader/preloader.component';
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MainModule,
    HttpClientModule,
  ],
  providers: [],
  entryComponents: [PreloaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
