import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { Routes, RouterModule } from '@angular/router';
import { PortHomeComponent } from './components/port-home/port-home.component';
import { PortAboutComponent } from './components/port-about/port-about.component';
import { PortServicesComponent } from './components/port-services/port-services.component';

const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent
  }
]

@NgModule({
  declarations: [
    PortfolioComponent,
    PortHomeComponent,
    PortAboutComponent,
    PortServicesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PortfolioModule { }
