import {Component, ElementRef, ViewChild} from '@angular/core';
import html2canvas from 'html2canvas';
import {jsPDF} from 'jspdf';
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

  constructor(protected dataService: DataService) {
    dataService.activitiesObservable.subscribe(activities => {
      // @ts-ignore
      if (activities === null) {
        return;
      }
      if (activities && activities.length > 0) {
        this.activities = activities;
      }
    });
  }

  public convetToPDF() {
    const htmlWidth = this.contentToConvert?.nativeElement.offsetWidth;
    const htmlHeight = this.contentToConvert?.nativeElement.offsetHeight;

    const topLeftMargin = 15;

    let pdfWidth = (htmlWidth + (topLeftMargin * 2));
    let pdfHeight = ((pdfWidth * 1.5) + (topLeftMargin * 2));

    const canvasImageWidth = htmlWidth;
    const canvasImageHeight = htmlHeight;

    const totalPDFPages = Math.ceil(htmlHeight / pdfHeight) - 1;
    const data = this.contentToConvert?.nativeElement;
    html2canvas(data, {ignoreElements: element => element.classList.contains('dontPrint'), logging: false, scale: 2.5}).then(canvas => {

      canvas.getContext('2d');

      const imgData = canvas.toDataURL('image/jpeg');
      let pdf = new jsPDF('p',  'pt', [pdfWidth, pdfHeight], true);
      pdf.addImage(imgData, 'jpeg', topLeftMargin, topLeftMargin, canvasImageWidth, canvasImageHeight);

      for (let i = 1; i <= totalPDFPages; i++) {
        pdf.addPage([pdfWidth, pdfHeight], 'p');
        pdf.addImage(imgData, 'jpeg', topLeftMargin, -(pdfHeight * i) + (topLeftMargin * 4), canvasImageWidth, canvasImageHeight);
      }

      pdf.save(`kDriveBi Activity Report.pdf`);
    });
  }
}
