import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ColorinverterComponent } from './pages/colorinverter/colorinverter.component';
import { MdiComponent } from './pages/mdi/mdi.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'colorinverter', component: ColorinverterComponent },
  { path: 'mdi', component: MdiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
