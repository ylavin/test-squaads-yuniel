import {Component, OnInit} from '@angular/core';
import {PlayerService} from "../../../core/services/playerService";
import {Player} from "../../../core/models/player";
import {TeamService} from "../../../core/services/teamService";

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
  players: Player[];
  columNames: string[];
  title: string;

  constructor(public playerService: PlayerService, public teamService: TeamService) {
    this.players = [];
    this.columNames = ['Avatar', 'Nombre', 'Equipo'];
    this.title = 'Jugadores';
  }

  ngOnInit(): void {
    this.playerService.getAllPlayers().subscribe(response => {
      this.players = response as Player[]
    });

  }

}
