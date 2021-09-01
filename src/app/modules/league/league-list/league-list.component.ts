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
  columNames: string[];
  title: string;

  constructor(private leagueService: LeagueService) {
    this.leagues =[];
    this.columNames=['Logo', 'Nombre'];
    this.title = 'Ligas';
  }

  ngOnInit(): void {
    this.leagueService.getAllLeagues().subscribe(response => {
      this.leagues = response as League[]
    });
  }

}
