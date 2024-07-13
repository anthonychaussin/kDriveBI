import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Component, ElementRef, inject, ViewChild} from '@angular/core';
import {map, Observable, shareReplay} from 'rxjs';
import {Activity} from '../../Model/activity';
import {DataService} from '../../Service/data.service';
import * as Papa from 'papaparse';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  @ViewChild('fileSelector') fileSelector!: ElementRef;
  private breakpointObserver = inject(BreakpointObserver);

  constructor(protected dataService: DataService) {}

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
                                        .pipe(
                                          map(result => result.matches),
                                          shareReplay()
                                        );

  public importData() {
    this.cleanData();
    this.fileSelector.nativeElement.click();
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      Papa.parse<Activity>(file, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        step: (results) => {
          this.dataService.addActivities( Object.assign(new Activity(), results.data));
        },
        complete: () => {
          this.dataService.compute()
        }
      });
    }
  }

  addData(): void {
    this.fileSelector.nativeElement.click();
  }

  cleanData(): void {
    this.dataService.cleanData()
  }
}
