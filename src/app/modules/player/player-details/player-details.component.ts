import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {PrimeNGConfig} from "primeng/api";
import {PlayerService} from "../../../core/services/playerService";
import {TeamService} from "../../../core/services/teamService";
import {Player} from "../../../core/models/player";
import {Team} from "../../../core/models/team";

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss']
})
export class PlayerDetailsComponent implements OnInit {
  currentId: any;
  playerDetail: any;
  team: any;

  constructor(private primengConfig: PrimeNGConfig, private router: Router, private route: ActivatedRoute, private playerService: PlayerService, private teamService: TeamService) {
    this.currentId = null;
    this.playerDetail = null;
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.route.params.subscribe((params: Params) => this.currentId = params['id']);
    this.playerService.getPlayerById(this.currentId).subscribe(response => {
      this.playerDetail = response as Player;
      this.teamService.getTeamById(this.playerDetail.teamId).subscribe(response => this.team = response as Team);
    });
  }

  goToBack() {
    this.router.navigate(['/players']);
  }

}
