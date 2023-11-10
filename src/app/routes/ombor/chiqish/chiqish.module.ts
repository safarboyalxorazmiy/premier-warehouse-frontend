import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChiqishRoutingModule } from './chiqish-routing.module';
import { ChiqishComponent } from './chiqish.component';

import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    ChiqishComponent
  ],
  imports: [
    CommonModule,
    ChiqishRoutingModule,
    TableModule
  ]
})

export class ChiqishModule {}
