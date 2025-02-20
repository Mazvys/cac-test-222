import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { AnotherComponent } from './another/another.component';
import { NonComp } from './comp/comp.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AnotherComponent,
    NonComp
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
