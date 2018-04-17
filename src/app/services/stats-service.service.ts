import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {StatEntry} from '../../../../models/StatEntry'

import 'rxjs/add/operator/map';

@Injectable()
export class StatsServiceService {
  private serverApi = 'http://localhost:3000';

  constructor(private http : Http) { }

  public getAllStats():Observable<StatEntry[]>{
    let URI = `${this.serverApi}/dpresenter/`;
    return this.http.get(URI)
      .map(res => res.json())
      .map(res => <StatEntry[]>res.stats);
  }
}
