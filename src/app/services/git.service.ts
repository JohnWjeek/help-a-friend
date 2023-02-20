import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor(private http: HttpClient) { }

  getUsersList(since: number = 0, limit: number = 10): Observable<any> {
    return this.http.get(`https://api.github.com/users?per_page=${limit}&since=${since}`);
  }

  getUsersRepos(username: string): Observable<any> {
    return this.http.get(`https://api.github.com/users/${username}/repos`);
  }
}
