import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTMLComponent } from './components/html/html.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { JavascriptComponent } from './components/javascript/javascript.component';
import { CssComponent } from './components/css/css.component';

const routes: Routes = [
  {
    path: 'html',
    component: HTMLComponent
  },
  {
    path: 'js',
    component: JavascriptComponent
  },{
    path: 'css',
    component: CssComponent
  }
]

@NgModule({
  declarations: [
    HTMLComponent,
    JavascriptComponent,
    CssComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class InterviewModule { }
