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

// Local Components
import { BarComponent } from './components/bar/bar.component';
const components = [
  BarComponent,
]

// Pages
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ColorinverterComponent } from './pages/colorinverter/colorinverter.component';
import { MdiComponent } from './pages/mdi/mdi.component';
const pages = [
  WelcomeComponent,
  ColorinverterComponent,
  MdiComponent
]

@NgModule({
  declarations: [
    AppComponent,
    ...components,
    ...pages,
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
