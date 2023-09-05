import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectAccountEnrollmentPage } from './select-account-enrollment.page';

const routes: Routes = [
  {
    path: '',
    component: SelectAccountEnrollmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectAccountEnrollmentPageRoutingModule {}
