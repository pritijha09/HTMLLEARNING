import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTMLComponent } from './components/html/html.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { JavascriptComponent } from './components/javascript/javascript.component';
import { CssComponent } from './components/css/css.component';
import { SanitizeHtmlPipe } from './pipe/sanitize-html.pipe';
import { AngularComponent } from './components/angular/angular.component';

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
  },{
    path: 'angular',
    component: AngularComponent
  }
]

@NgModule({
  declarations: [
    HTMLComponent,
    JavascriptComponent,
    CssComponent,
    SanitizeHtmlPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class InterviewModule { }
