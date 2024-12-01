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
import {ReppetedActionTypeRoutingModule} from './reppeted-action-type-routing.module';
import {ReppetedActionTypeComponent} from './reppeted-action-type.component';

@NgModule({
            imports: [
              CommonModule,
              ReppetedActionTypeRoutingModule,
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
  exports: [ReppetedActionTypeComponent],
  declarations: [ReppetedActionTypeComponent]
})
export class ReppetedActionTypeModule {
}
