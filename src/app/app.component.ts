
import {Component} from '@angular/core';
import {Activity} from './Model/activity';
import {DataService} from './Service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kDriveBI';
  activities: Activity[] = [];

  constructor(protected dataService: DataService) {
    dataService.activitiesObservable.subscribe((activities) => {
      // @ts-ignore
      if(activities === null){
        return;
      }
      if(activities && activities.length > 0) {
        this.activities = activities;
      }
    });
  }
}
