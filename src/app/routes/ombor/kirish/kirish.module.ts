import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KirishRoutingModule } from './kirish-routing.module';
import { KirishComponent } from './kirish.component';
import { FormsModule } from '@angular/forms';

import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    KirishComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    KirishRoutingModule,
    TableModule
  ]
})

export class KirishModule {}
