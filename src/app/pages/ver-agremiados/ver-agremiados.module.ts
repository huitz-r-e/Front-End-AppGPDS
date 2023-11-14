import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerAgremiadosPageRoutingModule } from './ver-agremiados-routing.module';

import { VerAgremiadosPage } from './ver-agremiados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerAgremiadosPageRoutingModule
  ],
  declarations: [VerAgremiadosPage]
})
export class VerAgremiadosPageModule {}
