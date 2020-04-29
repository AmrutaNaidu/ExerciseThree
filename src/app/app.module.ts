import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SingleTextComponent } from './components/single-text.component';
import { MultiTextComponent } from './components/multi-text.component';
import { ParentComponent } from './components/parent.component';
import { SlideShowComponent } from './components/slide-show.component';


@NgModule({
  declarations: [
    AppComponent,
    SingleTextComponent,
    MultiTextComponent,
    ParentComponent,
    SlideShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
