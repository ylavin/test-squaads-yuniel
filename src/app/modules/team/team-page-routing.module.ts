import { TeamDetailsComponent } from './team-details/team-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
      path: 'teams/details/:id',
      component: TeamDetailsComponent,
      data: { title: 'Detalles del Equipo', isChild: true },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamPageRoutingModule {}
