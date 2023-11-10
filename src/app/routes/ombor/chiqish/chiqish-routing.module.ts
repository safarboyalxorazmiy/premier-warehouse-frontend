import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChiqishComponent } from './chiqish.component';

const routes: Routes = [{ path: '', component: ChiqishComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ChiqishRoutingModule {}