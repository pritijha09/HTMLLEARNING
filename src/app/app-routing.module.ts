import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IconBarComponent } from './components/icon-bar/icon-bar.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';

const routes: Routes = [{
  path: 'icon-bar',
  component: IconBarComponent
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
