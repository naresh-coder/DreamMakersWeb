import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Skills} from './skills';
import 'rxjs/add/operator/map';

@Injectable()
export class SkillsService {

  private url = 'http://localhost:8080/getSkills';
  private addUrl = 'http://localhost:8080/addSkills';

  constructor(private http: Http) {
  }

  getSkills(): Observable<Skills> {
    return this.http.get(this.url)
      .map(res => res.json());
  }

  addSkill (skills: Skills): Observable<Skills>  {

    const body = JSON.stringify({ skills });
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(this.addUrl, body, options)
      .map(res =>  <Skills> res.json());
  }

}
