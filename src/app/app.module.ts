import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
const materialModules = [
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
];

// Pages
import { WelcomeComponent } from './pages/welcome/welcome.component';
const pages = [
  WelcomeComponent,
]
// Local Components
import { BarComponent } from './components/bar/bar.component';
import { ColorinverterComponent } from './pages/colorinverter/colorinverter.component';
const components = [
  BarComponent,
]

@NgModule({
  declarations: [
    AppComponent,
    ...components,
    ...pages,
    ColorinverterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...materialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
