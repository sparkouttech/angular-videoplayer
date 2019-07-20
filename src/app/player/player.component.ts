import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  videoObj: any;
  videoList
  constructor() {
    this.videoObj = JSON.parse(sessionStorage.getItem('video'));
    this.videoList = JSON.parse(sessionStorage.getItem('videoList'));
    console.log("videoObj", this.videoObj);
  }
  breakpoint: any;
  ngOnInit() {
    // this.onResize($event);
    this.breakpoint = (window.innerWidth <= 600) ? 1 : 2;
    console.log("breakpoint", this.breakpoint);
  }

  onResize(event) {
    console.log("event.target.innerWidth", event.target.innerWidth)
    this.breakpoint = (event.target.innerWidth <= 600) ? 1 : 2;
  }

}
