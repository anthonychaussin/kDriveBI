import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatListItem, MatNavList} from '@angular/material/list';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {MatToolbar} from '@angular/material/toolbar';
import {DashboardModule} from '../dashboard/dashboard.module';
import {MenuRoutingModule} from './menu-routing.module';
import {MenuComponent} from './menu.component';

@NgModule({
            imports: [
              CommonModule,
              MenuRoutingModule,
              DashboardModule,
              MatIcon,
              MatIconButton,
              MatToolbar,
              MatSidenavContent,
              MatListItem,
              MatNavList,
              MatSidenav,
              MatSidenavContainer
            ],
  exports: [MenuComponent],
  declarations: [MenuComponent]
})
export class MenuModule {
}
