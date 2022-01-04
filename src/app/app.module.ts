import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { IconBarComponent } from './components/icon-bar/icon-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';

@NgModule({
  declarations: [
    AppComponent,
    IconBarComponent,
    HeaderComponent,
    VideoPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
