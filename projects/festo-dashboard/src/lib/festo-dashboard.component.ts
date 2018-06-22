
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as dashboardActions from './actions/dashboard.action';
import * as fromDashboard from './reducers/dashboard';
@Component({
  selector: 'festo-dashboard',
  template: `
    <p>
      festo-dashboard works!
      <button (click)="onClick()">Click Me</button>
    </p>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FestoDashboardComponent implements OnInit {

  constructor(private store: Store<fromDashboard.DashboardState>) { }

  ngOnInit() {
  }

  onClick() {
    this.store.dispatch(new dashboardActions.LoadDashboardsAction('123'));
  }
}
