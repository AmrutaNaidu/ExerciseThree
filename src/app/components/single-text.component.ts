import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-single-text',
  template: `<label for="single-text" id="single-text">Single Text</label>
  <input id="single-text" type="text" [(ngModel)]="singleText" (keyup)="onChange()" />
  <br>
  `,
  styles: [`
    label {
      padding: 20px;
      margin-right: 20px;
    }
    input {
      padding: 8px;
      border-radius: 5px;
      box-shadow: none;
    }
  `]
})
export class SingleTextComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  singleText: string;
  @Output() textChange = new EventEmitter();
  onChange() {this.textChange.emit(this.singleText)}
}
