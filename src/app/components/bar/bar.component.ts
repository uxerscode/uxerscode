import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mail() {
    window.location.href = "mailto:uxerscode@gmail.com";
  }

  twitter() {
  }

  github() {
    window.location.href = "https://github.com/uxerscode";
  }
}
