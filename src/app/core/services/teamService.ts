import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

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

  getTeamById(id: any) {
    return this.http.get(this.url + this.endpoint + '/' + id);
  }

  create(body: any) {
    let response = null;
    try {
      response = this.http
        .post(`${this.url}${this.endpoint}`, body);
    } catch (error) {
      response = this.errorHandler('POST', error);
    }
    return response;
  }

  public update(body: any, id: any): Observable<any> {
    let response = null;
    try {
      response = this.http
        .patch(`${this.url}${this.endpoint}/${id}`, body);
    } catch (error) {
      response = this.errorHandler('PATCH', error);
    }
    return response;
  }

  public deleteById(id: number | string): Observable<any> {
    let response = null;
    try {
      response = this.http
        .delete(`${this.url}${this.endpoint}/${id}`);
    } catch (error) {
      response = this.errorHandler('DELETE', error);
    }
    return response;
  }

  public errorHandler(
    method: string,
    error: HttpErrorResponse,
  ): Observable<never> {
    console.error(
      `Error occurred during ${method} ${this.url}/${this.endpoint}`,
      error,
    );
    return Observable.throw(error);
  }
}
