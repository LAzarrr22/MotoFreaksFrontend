import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {AuthenticationModule} from "./modules/authentication/authentication.module";
import {EffectsModule} from "@ngrx/effects";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {HomeModule} from "./modules/home/home.module";
import {MenuModule} from "./modules/menu/menu.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {HTTPCustomInterceptor} from "./modules/authentication/interceptor/http.interceptor";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    AuthenticationModule,
    HomeModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MenuModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HTTPCustomInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
