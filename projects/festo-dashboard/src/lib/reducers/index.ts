import { Widget } from './../models/widget';
import { environment } from './../../../../../src/environments/environment';
import { combineReducers, ActionReducerMap, compose, createSelector, createFeatureSelector, ActionReducer, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { storeLogger } from 'ngrx-store-logger';

import * as fromDashboard from './dashboard';
import * as fromWidget from './widget';

export interface AppState {
  dashboard: fromDashboard.DashboardState;
  widget: fromWidget.WidgetState;
}

export function logger(reducer: ActionReducer<AppState>): any {
  // default, no options
  return storeLogger()(reducer);
}

export const reducers: ActionReducerMap<AppState> = {
  dashboard: fromDashboard.reducer,
  widget: fromWidget.reducer
};


/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger, storeFreeze]
  : [];

export const getDashboardState = (state: AppState) => state.dashboard;
export const getWidgetState = (state: AppState) => state.widget;
