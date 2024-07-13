import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RushHoursRoutingModule} from './rush-hours-routing.module';
import {RushHoursComponent} from './rush-hours.component';

@NgModule({
  imports: [
    CommonModule,
    RushHoursRoutingModule,
  ],
  exports: [RushHoursComponent],
  declarations: [RushHoursComponent]
})
export class RushHoursModule {
}
