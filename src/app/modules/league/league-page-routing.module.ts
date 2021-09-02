import { TouristListPageComponent } from './tourist-list-page/tourist-list-page.component';
import { TouristEditPageComponent } from './tourist-edit-page/tourist-edit-page.component';
import { TouristDetailsPageComponent } from './tourist-details-page/tourist-details-page.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TouristListPageComponent,
    data: { shouldReuse: true, key: 'tourist-list' }
  },
  {
      path: 'edit/:id',
      component: TouristEditPageComponent,
      data: { title: 'tourist.title', isChild: true },
  },
  {
      path: 'create',
      component: TouristEditPageComponent,
      data: { title: 'tourist.title', isChild: true },
  },
  {
      path: 'details/:id',
      component: TouristDetailsPageComponent,
      data: { title: 'tourist.title', isChild: true },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TouristPageRoutingModule {}
