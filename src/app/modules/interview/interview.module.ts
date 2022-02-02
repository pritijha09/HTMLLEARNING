import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTMLComponent } from './components/html/html.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';

const routes: Routes = [
  {
    path: '',
    component: HTMLComponent
  },
  {
    path: 'html',
    component: HTMLComponent
  }
]

@NgModule({
  declarations: [
    HTMLComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class InterviewModule { }
