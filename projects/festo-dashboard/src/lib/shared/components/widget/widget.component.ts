import { getWidgetState } from './../../../reducers/index';
import { Widget } from './../../../models/widget';
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
import { FestoWidgetToggleDirective } from './widget-toggle.directive';
import * as widgetActions from './../../../actions/widget.action';
import * as fromWidget from './../../../reducers/widget';
import { Store, select } from '@ngrx/store';

import { Observable, BehaviorSubject } from 'rxjs';
@Component({
  selector     : 'festo-widget',
  templateUrl  : './widget.component.html',
  styleUrls    : ['./widget.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FestoWidgetComponent implements AfterContentInit {

  @HostBinding('class.flipped')
  flipped = false;

  flipped$: Observable<boolean>;
  // @select() readonly flipped$: Observable<number>;

  @ContentChildren(FestoWidgetToggleDirective, {descendants: true})
  toggleButtons: QueryList<FestoWidgetToggleDirective>;

  /**
     * Constructor
     *
     * @param {ElementRef} _elementRef
     * @param {Renderer2} _renderer
     */
    constructor(
      private _elementRef: ElementRef,
      private _renderer: Renderer2,
      private cd: ChangeDetectorRef,
      private store: Store<fromWidget.WidgetState>
  ) {
    this.flipped$ = store.pipe(select(fromWidget.getFlipped));
    this.flipped$.subscribe((event: boolean) => {
      this.flipped = event;
    });
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * After content init
   */
  ngAfterContentInit(): void {
      // Listen for the flip button click
      setTimeout(() => {
          this.toggleButtons.forEach(flipButton => {
              this._renderer.listen(flipButton.elementRef.nativeElement, 'click', (event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  this.toggle();
              });
          });
      });
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Toggle the flipped status
   */
  toggle(): void {
      this.store.dispatch(new widgetActions.FlipWidgetAction(!this.flipped));
      this.cd.markForCheck();
  }

}
