import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  template: `
    <h2>Slide Show</h2>  
    <section class="slide-show">
      <ul>
        <li><img src={{url}} alt="slide show image"></li>
      </ul>
      <button class="prev" title="Previous" (click)="prev()"><<</button>
      <button class="next" title="Next" (click)="next()">>></button>
    </section>
  `,
  styles: [`
    h2 {
      text-align: center;
    }
    .slide-show {
      width: 1000px;
      position: relative;
      margin: auto;
    }
    .slide-show ul {
      list-style: none;
      padding: 0;
      margin: 0;
      width: 100%;
    }
    button {
      cursor: pointer;
      position: absolute;
      top: 50%;
      font-weight: bold;
      color: white;
      background: black;
      width: 50px;
      height: 50px;
      opacity: 0.8;
      border: 0;
    }
    .next {
      right: 0;
    }
    .slide-show ul li {
      
    }
  `]
})
export class SlideShowComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  url = "./assets/images/img_nature_wide.jpg";
  //urls = ["./assets/images/img_nature_wide.jpg", "./assets/images/img_snow_wide.jpg", "./assets/images/img_mountains_wide.jpg"]
  prev(): void {
    console.log('in left');
    this.url = "./assets/images/img_snow_wide.jpg"
  }
  next(): void {
    console.log('in right');
    this.url = "./assets/images/img_mountains_wide.jpg"
  }
}
