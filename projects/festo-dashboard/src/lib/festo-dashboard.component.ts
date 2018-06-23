
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { dashboardAnimations } from './shared/animations';
import { Store, select } from '@ngrx/store';
import * as dashboardActions from './actions/dashboard.action';
import * as fromDashboard from './reducers/dashboard';
@Component({
  selector: 'festo-dashboard',
  templateUrl  : './festo-dashboard.component.html',
  styleUrls: ['./festo-dashboard.component.scss'],
  animations   : dashboardAnimations,
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
