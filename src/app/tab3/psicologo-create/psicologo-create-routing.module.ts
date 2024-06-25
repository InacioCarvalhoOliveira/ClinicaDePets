import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PsicologoCreatePage } from './psicologo-create.page';

const routes: Routes = [
  {
    path: '',
    component: PsicologoCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PsicologoCreatePageRoutingModule {}
