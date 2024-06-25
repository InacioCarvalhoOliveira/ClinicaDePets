import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PsicologoCreatePageRoutingModule } from './psicologo-create-routing.module';

import { PsicologoCreatePage } from './psicologo-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PsicologoCreatePageRoutingModule
  ],
  declarations: [PsicologoCreatePage]
})
export class PsicologoCreatePageModule {}
