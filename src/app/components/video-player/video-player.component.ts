import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  // @ViewChild('video', { static: true })
  // video!: ElementRef;
  isPlay: boolean = false;
  update: any;
  constructor() {

   }

  ngOnInit(): void {
this.updatePlayer();
  }

  playButton() {
    var myVideo: any = document.getElementById("video");
    if (myVideo.paused) {
      myVideo.play();
      this.isPlay = true;
      setInterval(() => {
       this.update =  this.updatePlayer();
      }, 30)
    }
    else {
      myVideo.pause();
      this.isPlay = false;
      window.clearInterval(this.update);
    }
  }

  makeBigScreen() {
    var myVideo: any = document.getElementById("video");
    myVideo.width = 640
  }

  updatePlayer() {
    var myVideo: any = document.getElementById("video");
    var timeField: any = document.getElementById('time-field');
 var percentage = (myVideo.currentTime/myVideo.duration)*100;
 var pbar: any = document.getElementById("pbar");
 pbar.style.width = percentage + '%';
 timeField.innerHTML = this.getFormattedTime();
 if(myVideo.ended) {
  window.clearInterval(this.update);
  this.isPlay = false;
 }
  }

  getFormattedTime() {
    var myVideo: any = document.getElementById("video");
   // alert(myVideo.duration)
    var seconds = Math.round(myVideo.currentTime);
    var minuts = Math.round(seconds/60);
    let second;
    let totalSec;
    if(seconds.toString().length === 1){
      second = '0' + seconds
    } else {
      second = seconds
    }

    var totalSecond = 50000
    // Math.round(myVideo.duration);
    var totalMinuts = Math.floor(totalSecond/60)
     if(totalMinuts > 0){
      totalSecond =  totalMinuts*60
     }

     if(totalSecond.toString().length === 1){
      totalSec = '0' + totalSecond
     }
    return `${minuts} : ${second}`

  }

  muteOrUnmute() {
    
  }

}
