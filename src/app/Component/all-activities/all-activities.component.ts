import {Component, Input, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Activity} from '../../Model/activity';

@Component({
  selector: 'app-all-activities',
  templateUrl: './all-activities.component.html',
  styleUrl: './all-activities.component.scss'
})
export class AllActivitiesComponent {
  displayedColumns: string[] = ['Date', 'User', 'ActionTypeEnum', 'Description'];
  dataSource: MatTableDataSource<Activity>;
  @Input() activities: Activity[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource<Activity>([]);
  }


  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource!.filter = filterValue.trim().toLowerCase();

    if (this.dataSource!.paginator) {
      this.dataSource!.paginator.firstPage();
    }
  }

  ngAfterViewInit(): void {
    if (this.activities && this.activities.length > 0) {
      this.dataSource = new MatTableDataSource(this.activities);
      this.dataSource!.paginator = this.paginator;
      this.dataSource!.sort = this.sort;
    }
  }
}
