import { getWidgetState } from './../../../../reducers/index';
import { Widget } from './../../../../models/widget';
import { dashboardAnimations } from './../../../../shared/animations';
import { AfterContentInit,
  Component,
  ContentChildren,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ElementRef,
  HostBinding,
  QueryList,
  Renderer2,
  ViewEncapsulation } from '@angular/core';
import { FestoWidgetToggleDirective } from './../widget-toggle.directive';
import * as widgetActions from './../../../../actions/widget.action';
import * as fromWidget from './../../../../reducers/widget';
import { Store, select } from '@ngrx/store';

import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector     : 'festo-widget-card',
  templateUrl  : './widget-card.component.html',
  styleUrls    : ['./widget-card.component.scss'],
  animations   : dashboardAnimations,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FestoWidgetCardComponent  {
}
