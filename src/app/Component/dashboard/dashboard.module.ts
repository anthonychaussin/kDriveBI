import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {AllActivitiesModule} from '../all-activities/all-activities.module';
import {ReppetedActionModule} from '../reppeted-action/reppeted-action.module';
import {RushHoursModule} from '../rush-hours/rush-hours.module';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';

@NgModule({
            imports: [
              CommonModule,
              DashboardRoutingModule,
              AllActivitiesModule,
              ReppetedActionModule,
              RushHoursModule,
              MatIcon,
              MatButton
            ],
  exports: [DashboardComponent],
  declarations: [DashboardComponent]
})
export class DashboardModule {
}
