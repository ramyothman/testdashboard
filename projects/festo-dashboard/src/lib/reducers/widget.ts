import { Widget } from './../models/widget';
import * as widgetActions from './../actions/widget.action';
import { WIDGET_ACTIONS } from './../actions/widget.action';
import {
  createSelector,
  createFeatureSelector
} from '@ngrx/store';

export interface WidgetState {
  loading: boolean;
  widgetState: Widget;
  selected: { [id: string]: boolean };
  flipped: boolean;
}


export function reducer(state = initialState, action: widgetActions.Actions): WidgetState {
  switch (action.type) {
    case WIDGET_ACTIONS.FLIP_WIDGET:
      return flipWidgetReducer(state, action as widgetActions.FlipWidgetAction);
    default:
      return state;
  }
}

export const initialState: WidgetState = {
  loading: false,
  widgetState: null,
  selected: { },
  flipped: false
};

function flipWidgetReducer(state: WidgetState, action: widgetActions.FlipWidgetAction): WidgetState {
  return {
    ...state,
    flipped: action.payload,
  };
}

export const getWidgetState = createFeatureSelector<WidgetState>('widget');
export const getFlipped = createSelector(getWidgetState, (state: WidgetState) => state.flipped);
