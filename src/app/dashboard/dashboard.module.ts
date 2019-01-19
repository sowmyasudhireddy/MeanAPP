import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderModule } from '../header/header.module';
import { HeaderComponent } from '../header/header.component';
import { SearchComponent } from '../search/search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    HeaderModule,
    CommonModule,
    FormsModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardComponent, HeaderComponent, SearchComponent]
})
export class DashboardModule { }
