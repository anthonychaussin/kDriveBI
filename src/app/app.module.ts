import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { ActivityByUserComponent } from './Component/activity-by-user/activity-by-user.component';
import { ActionsByDayComponent } from './Component/actions-by-day/actions-by-day.component';
import { ActionsByMonthComponent } from './Component/actions-by-month/actions-by-month.component';
import { ActionsByYearComponent } from './Component/actions-by-year/actions-by-year.component';
import { EvolutionComponent } from './Component/evolution/evolution.component';

@NgModule({
            declarations: [
              AppComponent,
              ActivityByUserComponent,
              ActionsByDayComponent,
              ActionsByMonthComponent,
              ActionsByYearComponent,
              EvolutionComponent,
            ],
            imports: [
              BrowserModule,
              CommonModule,
              AppRoutingModule,
            ],
            providers: [
              provideAnimationsAsync()
            ],
            bootstrap: [AppComponent]
          })
export class AppModule {
}
