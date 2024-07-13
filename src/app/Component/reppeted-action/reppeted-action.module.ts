import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatNoDataRow,
  MatRow,
  MatRowDef, MatTable
} from '@angular/material/table';
import {ReppetedActionRoutingModule} from './reppeted-action-routing.module';
import {ReppetedActionComponent} from './reppeted-action.component';

@NgModule({
            imports: [
              CommonModule,
              ReppetedActionRoutingModule,
              MatPaginator,
              MatRow,
              MatHeaderRow,
              MatRowDef,
              MatHeaderRowDef,
              MatNoDataRow,
              MatColumnDef,
              MatHeaderCell,
              MatCell,
              MatCellDef,
              MatHeaderCellDef,
              MatTable,
              MatSort
            ],
  exports: [ReppetedActionComponent],
  declarations: [ReppetedActionComponent]
})
export class ReppetedActionModule {
}
