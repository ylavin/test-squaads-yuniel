import { Component, OnInit} from '@angular/core';
import {LeagueService} from "../../../core/services/leagueService";
import {League} from "../../../core/models/league";

@Component({
  selector: 'app-league-list',
  templateUrl: './league-list.component.html',
  styleUrls: ['./league-list.component.scss']
})
export class LeagueListComponent implements OnInit {
  leagues: League[];

  constructor(private leagueService: LeagueService) {
    this.leagues =[];
  }

  ngOnInit(): void {
    this.leagueService.getAllLeagues().subscribe(response => this.leagues = response as League[]);
  }

}
