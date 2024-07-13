import moment from 'moment';
import {ActionType} from '../Enums/action-type';
import {Activity} from './activity';

export class Statistics {
  activityNumber: number = 0;
  users: string[] = [];
  actionsByType: {} = {};
  actionsByTime: {} = {};
  actionsByUser: {} = {};
  actionsByDate: {} = {};
  actionsRepetition: {} = {};
  activityByUser: {} = {};
  actionsByDay: {} = {};
  actionsByMonth: {} = {};
  actionsByYear: {} = {};

  async UpdateData(activites: Activity[]): Promise<void> {
    this.activityNumber = activites.length;
    this.users = await this.extractUsers(activites);

    await Promise.all([
                        await this.getActionsByDate(activites),
                        await this.getActivityByUser(activites),
                        await this.getActionsByUser(activites),
                        await this.getActionsByTime(activites),
                        await this.getActionsByType(activites),
                        await this.getActionsRepetition(activites),
                        await this.getActionsByDay(activites),
                        await this.getActionsByMonth(activites),
                        await this.getActionsByYear(activites),
                      ]);
  }

  private async extractUsers(activities: Activity[]): Promise<string[]> {
    await Promise.resolve();
    return [...new Set(activities.map(a => a.User))];
  }

  private async getActivityByUser(activities: Activity[]): Promise<void> {
    await Promise.resolve();
    this.activityByUser = activities
      .reduce((result: any, currentValue: any) => {
        const user = currentValue['User'];
        const action = currentValue['ActionTypeEnum'];
        if (!result[user]) {
          result[user] = {};
        }

        if (!result[user][action]) {
          result[user][action] = 0;
        }

        result[user][action]++;

        return result;
      }, {});
  }

  private async getActionsByUser(activities: Activity[]): Promise<void> {
    await Promise.resolve();
    this.actionsByUser = activities
      .reduce((result: any, currentValue: any) => {
        if (result[currentValue.User]) {
          result[currentValue.User]++;
        } else {
          result[currentValue.User] = 1;
        }
        return result;
      }, {});
  }

  private async getActionsByDate(activities: Activity[]): Promise<void> {
    await Promise.resolve();
    this.actionsByDate = activities
      .reduce((result: any, currentValue: any) => {
        if (result[currentValue.Date.toDateString()]) {
          result[currentValue.Date.toDateString()]++;
        } else {
          result[currentValue.Date.toDateString()] = 1;
        }
        return result;
      }, {});
  }

  private async getActionsByDay(activities: Activity[]): Promise<void> {
    await Promise.resolve();
    this.actionsByDay = activities
      .reduce((result: any, currentValue: any) => {
        if (result[currentValue.Date.toDateString()]) {
          result[currentValue.Date.toDateString()]++;
        } else {
          result[currentValue.Date.toDateString()] = 1;
        }
        return result;
      }, {});
  }

  private async getActionsByMonth(activities: Activity[]): Promise<void> {
    await Promise.resolve();
    this.actionsByMonth = activities
      .reduce((result: any, currentValue: any) => {
        if (result[currentValue.Date.toDateString()]) {
          result[currentValue.Date.toDateString()]++;
        } else {
          result[currentValue.Date.toDateString()] = 1;
        }
        return result;
      }, {});
  }

  private async getActionsByYear(activities: Activity[]): Promise<void> {
    await Promise.resolve();
    this.actionsByYear = activities
      .reduce((result: any, currentValue: any) => {
        if (result[currentValue.Date.toDateString()]) {
          result[currentValue.Date.toDateString()]++;
        } else {
          result[currentValue.Date.toDateString()] = 1;
        }
        return result;
      }, {});
  }

  private async getActionsByTime(activities: Activity[]): Promise<void> {
    this.actionsByTime = activities
      .filter(a => a.ActionTypeEnum === ActionType.file_trash_inherited)
      .sort((a, b) => moment(a.Date).format('HH:mm') < moment(b.Date).format('HH:mm') ? -1 : 1)
      .reduce((result: any, currentValue: any) => {
        let momentString = moment(currentValue.Date).format('HH:mm');
        if (result[momentString]) {
          result[momentString]++;
        } else {
          result[momentString] = 1;
        }
        return result;
      }, {});
    await Promise.resolve();
  }

  private async getActionsByType(activities: Activity[]): Promise<void> {
    await Promise.resolve();
    this.actionsByType = activities
      .reduce((result: any, currentValue: any) => {
        if (result[currentValue.ActionTypeEnum]) {
          result[currentValue.ActionTypeEnum]++;
        } else {
          result[currentValue.ActionTypeEnum] = 1;
        }
        return result;
      }, {});
  }

  private async getActionsRepetition(activities: Activity[]): Promise<void> {
    await Promise.resolve();
    this.actionsRepetition = activities
      .filter(a => a.ActionTypeEnum !== ActionType.user_connected && a.Description != null)
      .reduce((result: any, currentValue: any) => {
        if (result[currentValue.Description]) {
          result[currentValue.Description]++;
        } else {
          result[currentValue.Description] = 1;
        }
        return result;
      }, {});
  }
}
