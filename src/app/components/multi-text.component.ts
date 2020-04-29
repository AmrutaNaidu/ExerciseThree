import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-multi-text',
  template: `
  <label for="multi-text">Multi Text</label>  
  <textarea id="multi-text" [(ngModel)]="multiText" (keyup)="onChange()"></textarea>
  <br>
  `,
  styles: [`
    label {
      padding: 20px;
      margin-right: 20px;
    }
    textarea {
      padding: 10px;
      border-radius: 5px;
      box-shadow: none;
      margin-top: 30px;
    }
  `]
})
export class MultiTextComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  multiText: String;
  @Output() textChange = new EventEmitter();
  onChange() {this.textChange.emit(this.multiText)}
}
