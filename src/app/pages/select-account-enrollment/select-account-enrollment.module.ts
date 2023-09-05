import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectAccountEnrollmentPageRoutingModule } from './select-account-enrollment-routing.module';

import { SelectAccountEnrollmentPage } from './select-account-enrollment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectAccountEnrollmentPageRoutingModule
  ],
  declarations: [SelectAccountEnrollmentPage]
})
export class SelectAccountEnrollmentPageModule {}
