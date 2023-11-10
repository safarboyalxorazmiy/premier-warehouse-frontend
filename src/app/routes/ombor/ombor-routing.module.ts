import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OmborComponent } from './ombor.component';

const routes: Routes = [{ path: '', component: OmborComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class OmborRoutingModule {}