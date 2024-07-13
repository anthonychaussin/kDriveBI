import {ActionType} from '../Enums/action-type';

export class Activity {
  Date: Date = new Date();
  User: string = '';
  IP: string = '';
  Location: string = '';
  UserAgent: string = '';
  Action: string = '';
  Description: string = '';

  ActionTypeEnum: ActionType | undefined;

  public convert() {
    try{
      this.ActionTypeEnum = (<any>ActionType)[this.Action];
    } catch(e) {console.log(e);}

  }
}
