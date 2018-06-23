import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FestoWidgetComponent } from './widget.component';
import { FestoWidgetCardComponent } from './widget-card/widget-card.component';
import { FestoWidgetToggleDirective } from './widget-toggle.directive';
import {BrowserModule} from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
@NgModule({
    imports: [
      CommonModule,
      BrowserModule,
      BrowserAnimationsModule
    ],
    declarations: [
      FestoWidgetComponent,
      FestoWidgetCardComponent,
      FestoWidgetToggleDirective
    ],
    exports     : [
      FestoWidgetComponent,
      FestoWidgetCardComponent,
        FestoWidgetToggleDirective
    ],
})

export class FestoWidgetModule {
}
