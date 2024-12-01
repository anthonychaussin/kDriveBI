import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Activity} from '../Model/activity';
import {Statistics} from '../Model/statistics';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private activites: Activity[] = [];
  public activitiesObservable: BehaviorSubject<Activity[]|null> = new BehaviorSubject<Activity[]|null>([]);
  public statistics: Statistics = new Statistics();

  constructor() {

  }

  addActivities(data: Activity): void {
    data.convert();
    this.activites.push(data);
  }

  compute(): void {
    this.statistics.UpdateData(this.activites).then(() => this.activitiesObservable.next(this.activites));
  }

  cleanData(): void {
    this.activitiesObservable.next(null);
    this.activitiesObservable.next([]);
    this.statistics = new Statistics();
    this.activites = [];
  }
}
