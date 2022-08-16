import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IconBarComponent } from './components/icon-bar/icon-bar.component';
import { LoginComponent } from './components/login/login.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';

const routes: Routes = [
  {
    path:'', redirectTo:'/html', pathMatch: 'full'
  },
  {
  path: 'icon-bar',
  component: IconBarComponent
},
{
  path: 'login',
  component: LoginComponent
},
// {
//   path: 'portfolio',
//   loadChildren: () => import('./modules/portfolio/portfolio.module').then(m => m.PortfolioModule)
// },
{
  path: '',
  loadChildren: () => import('./modules/interview/interview.module').then(m => m.InterviewModule)
},
{
  path: 'video-player',
  component: VideoPlayerComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
