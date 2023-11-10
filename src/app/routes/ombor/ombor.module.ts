import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OmborRoutingModule } from './ombor-routing.module';
import { OmborComponent } from './ombor.component';
import { FormsModule } from '@angular/forms';

import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    OmborComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    OmborRoutingModule,
    TableModule
  ]
})

export class OmborModule {}
