import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'ombor/kirish', loadChildren: () => import('./routes/ombor/kirish/kirish.module').then(m => m.KirishModule) },
  { path: 'ombor/chiqish', loadChildren: () => import('./routes/ombor/chiqish/chiqish.module').then(m => m.ChiqishModule) },
  { path: 'ombor', loadChildren: () => import('./routes/ombor/ombor.module').then(m => m.OmborModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }