import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {Player} from "../models/player";
import {Team} from "../models/team";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  endpoint = 'players';
  url = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getAllPlayers() {
    return this.http.get(this.url + this.endpoint);
  }

  getTeamById(id: any) {
   return this.http.get(this.url + 'teams' + '/' + id);
  }

  create(){

  }
}
