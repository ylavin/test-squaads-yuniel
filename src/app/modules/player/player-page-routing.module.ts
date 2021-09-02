import { PlayerDetailsComponent } from './player-details/player-details.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
      path: 'players/details/:id',
      component: PlayerDetailsComponent,
      data: { title: 'Detalles de Jugador', isChild: true },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerPageRoutingModule {}
