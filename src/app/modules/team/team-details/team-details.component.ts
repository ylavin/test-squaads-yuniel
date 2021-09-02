import {Component, OnInit} from '@angular/core';
import {Player} from "../../../core/models/player";
import {PrimeNGConfig} from "primeng/api";
import {TeamService} from "../../../core/services/teamService";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {LeagueService} from "../../../core/services/leagueService";
import {PlayerService} from "../../../core/services/playerService";
import {Team} from "../../../core/models/team";
import {League} from "../../../core/models/league";

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss']
})
export class TeamDetailsComponent implements OnInit {
  players: Player[];
  titleTable: string;
  playersColumnName: string[];
  currentId: any;
  teamDetail: any;
  league: any;

  constructor(private primengConfig: PrimeNGConfig, public teamService: TeamService, private router: Router, private route: ActivatedRoute, private leagueService: LeagueService, public playerService: PlayerService) {
    this.players = [];
    this.titleTable = 'Jugadores';
    this.playersColumnName = ['Avatar', 'Nombre'];
    this.currentId = null;
    this.teamDetail = null;
    this.league = null;
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.route.params.subscribe((params: Params) => this.currentId = params['id']);
    this.teamService.getTeamById(this.currentId).subscribe(response => {
      this.teamDetail = response as Team;
      this.leagueService.getLeagueById(this.teamDetail.leagueId).subscribe(res => this.league = res as League);
    });
    this.playerService.getAllPlayers().subscribe(response => {
        let res = response as Player[];
        this.players = res.filter(player => player.teamId === this.currentId)
      }
    )
  }

  goToBack() {
    this.router.navigate(['/teams']);
  }

}
