import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  endpoint = 'leagues';
  url = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getAllLeagues() {
    return this.http.get(this.url + this.endpoint);
  }
}
