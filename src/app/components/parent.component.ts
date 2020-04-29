import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <app-single-text (textChange)="displaySingleText($event)"></app-single-text>
    <app-multi-text (textChange)="displayMultiText($event)"></app-multi-text>
    <button (click)="toggle()">Toggle</button> 
    <section class="toggle" [style.display] = " flag ? 'block' : 'none'">
    <div class="single">{{singleText}}</div>
    <div class="multi">{{multiText}}</div></section>
  `,
  styles: [`
    button {
      background: black;
      color: white;
      padding: 15px;
      margin-top: 20px;
      margin-left: 20px;
      border-radius: 5px;
      font-weight: bold;
      font-size: 14px;
    }
    .toggle {
      border: 1px solid #7db9ec;
      background: #f0f8ff;
      margin: 20px;
      padding: 10px;
      border-radius: 5px;
      font-style: italic;
    }
  `]
})
export class ParentComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  singleText : String;
  multiText: String;
  flag: Boolean = true;

  displaySingleText(event: String) {
    this.singleText = event;
  }
  displayMultiText(event: String) {
    this.multiText = event;
  }

  toggle(): void {
    console.log("inside toggle!");
    this.flag = !this.flag;
  }
}
