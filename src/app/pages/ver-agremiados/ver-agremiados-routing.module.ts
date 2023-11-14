import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerAgremiadosPage } from './ver-agremiados.page';

const routes: Routes = [
  {
    path: '',
    component: VerAgremiadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerAgremiadosPageRoutingModule {}
