import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReppetedActionTypeComponent} from './reppeted-action-type.component';

const routes: Routes = [
  {
    path: '',
    component: ReppetedActionTypeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReppetedActionTypeRoutingModule {
}
