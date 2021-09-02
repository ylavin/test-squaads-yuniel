import { LeagueDetailsComponent } from './league-details/league-details.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
      path: 'leagues/details/:id',
      component: LeagueDetailsComponent,
      data: { title: 'Detalles de Liga', isChild: true },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaguePageRoutingModule {}
