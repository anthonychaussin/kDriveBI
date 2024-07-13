import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RushHoursComponent} from './rush-hours.component';

const routes: Routes = [
  {
    path: '',
    component: RushHoursComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RushHoursRoutingModule {
}
