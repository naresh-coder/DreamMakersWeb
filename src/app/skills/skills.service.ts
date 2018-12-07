import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Skills} from './skills';
import 'rxjs/add/operator/map';


@Injectable()
export class SkillsService {

  private url = 'http://localhost:8080/getSkills/';

  constructor(private http: Http) {
  }

  getSkills(): Observable<Skills> {
    return this.http.get(this.url)
      .map(res => res.json());
  }

}
