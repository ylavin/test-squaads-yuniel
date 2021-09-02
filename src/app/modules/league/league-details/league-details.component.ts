import {Component, OnInit} from '@angular/core';
import {Team} from "../../../core/models/team";
import {TeamService} from "../../../core/services/teamService";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {League} from "../../../core/models/league";
import {LeagueService} from "../../../core/services/leagueService";
import {PrimeNGConfig} from "primeng/api";

@Component({
  selector: 'app-league-details',
  templateUrl: './league-details.component.html',
  styleUrls: ['./league-details.component.scss']
})
export class LeagueDetailsComponent implements OnInit {
  teams: Team[];
  titleTable: string;
  teamColumnName: string[];
  currentId: any;
  leagueDetail: any;

  constructor(private primengConfig: PrimeNGConfig, public teamService: TeamService, private router: Router, private route: ActivatedRoute, private leagueService: LeagueService) {
    this.teams = [];
    this.titleTable = 'Equipos de la Liga';
    this.teamColumnName = ['Logo', 'Nombre'];
    this.currentId = null;
    this.leagueDetail = null;
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.route.params.subscribe((params: Params) => this.currentId = params['id']);

    this.leagueService.getLeagueById(this.currentId).subscribe(response => this.leagueDetail = response as League);

    this.teamService.getAllTeams().subscribe(response => {
      let res = response as Team[];
      this.teams = res.filter(team => team.leagueId === this.currentId)
    });

  }

  goToBack(){
    this.router.navigate(['/leagues']);
  }

}
