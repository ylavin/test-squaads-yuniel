import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  endpoint = 'teams';
  url = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getAllTeams() {
    return this.http.get(this.url + this.endpoint);
  }
}
