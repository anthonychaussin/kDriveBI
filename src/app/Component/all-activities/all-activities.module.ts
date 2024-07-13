import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {
  MatCell,
  MatCellDef, MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatNoDataRow,
  MatRow,
  MatRowDef, MatTable
} from '@angular/material/table';
import {AllActivitiesComponent} from './all-activities.component';
import {AllActivitiesRoutingModule} from './all-activities-routing.module';

@NgModule({
            imports: [
              CommonModule,
              AllActivitiesRoutingModule,
              MatPaginator,
              MatNoDataRow,
              MatRowDef,
              MatRow,
              MatHeaderRow,
              MatHeaderRowDef,
              MatCell,
              MatHeaderCell,
              MatCellDef,
              MatHeaderCellDef,
              MatColumnDef,
              MatTable,
              MatSort,
              MatInput,
              MatLabel,
              MatFormField
            ],
  exports: [AllActivitiesComponent],
  declarations: [AllActivitiesComponent]
})
export class AllActivitiesModule {
}
