import { Action } from '@ngrx/store';

export const WIDGET_ACTIONS =  {
  FLIP_WIDGET: '[WIDGET] Flip Widget'
};


export class FlipWidgetAction implements Action {
  readonly type = WIDGET_ACTIONS.FLIP_WIDGET;

  constructor(public payload?: boolean) { }
}

export type Actions =
FlipWidgetAction;
