import {Component, ElementRef, ViewChild} from '@angular/core';
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
import {Activity} from '../../Model/activity';
import {DataService} from '../../Service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  activities: Activity[] = [];
  @ViewChild('contentToConvert') contentToConvert: ElementRef | undefined;
  private isDarkMode: boolean = true;
  private currentTheme: 'light-theme' | 'dark-theme' = 'dark-theme';

  constructor(protected dataService: DataService) {
    dataService.activitiesObservable.subscribe(activities => {
      // @ts-ignore
      if(activities === null){
        return;
      }
      if(activities && activities.length > 0) {
        this.activities = activities;
      }
    });
  }

  public convetToPDF()
  {
    this.changeTheme();
    html2canvas(this.contentToConvert!.nativeElement).then(canvas => {
      // Few necessary setting options
      const imgWidth = 200;
      const imgHeight = canvas.height * imgWidth / canvas.width;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p', 'mm', 'a4', true); // A4 size page of PDF
      pdf.addImage(contentDataURL, 'PNG', 5, 5, imgWidth, imgHeight)
      pdf.save('kDrive_ActivityReport.pdf'); // Generated PDF
      this.changeTheme();
    });
  }
  changeTheme() {
    this.isDarkMode=!this.isDarkMode;
    if(this.isDarkMode){
      this.currentTheme = 'dark-theme';
    } else {
      this.currentTheme = 'light-theme'
    }
  }
}
