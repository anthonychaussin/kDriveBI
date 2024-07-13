import {Component, Input, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-reppeted-action',
  templateUrl: './reppeted-action.component.html',
  styleUrl: './reppeted-action.component.scss'
})
export class ReppetedActionComponent {
  displayedColumns: string[] = ['Description', 'Count'];
  dataSource: MatTableDataSource<{"Description": string, "Count": number}>;
  @Input() stats: {} = {};
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource<{"Description": string, "Count": number}>([]);
  }

  ngAfterViewInit(): void {
    let statistics = Object.entries(this.stats);
    if (statistics === null) {
      this.dataSource = new MatTableDataSource<{"Description": string, "Count": number}>();
      return;
    }
    if (statistics && statistics.length > 0) {
      let temp = statistics
        .map(s => Object.assign({}, {"Description": s[0], "Count": s[1] as number}))
        .filter(s => s.Count > 1)
        .sort((a,b) => a.Count - b.Count < 0 ? 1 : -1);
      this.dataSource = new MatTableDataSource(temp);
      this.dataSource!.paginator = this.paginator;
      this.dataSource!.sort = this.sort;
    }
  }
}
