import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

    audio = new Audio("../../assets/meow-lvusm.mp3");

  playPause(){
    if(this.audio.paused){
      this.audio.play()
    } else {
      this.audio.pause();
    }    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
