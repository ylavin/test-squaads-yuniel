import {Component, OnInit} from '@angular/core';
import {TeamService} from "../../../core/services/teamService";
import {Team} from "../../../core/models/team";
import {LeagueService} from "../../../core/services/leagueService";

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {
  teams: Team[];
  title: string;
  columnNames: string[];

  constructor(public teamService: TeamService, public leagueService: LeagueService) {
    this.teams = []
    this.title = 'Equipos';
    this.columnNames = ['Logo', 'Nombre',]
  }

  ngOnInit(): void {
    this.teamService.getAllTeams().subscribe(response => {
      this.teams = response as Team[]
    });
  }

}
