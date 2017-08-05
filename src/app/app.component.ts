import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import * as faker from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = new FormControl();
  title = 'app';
  results;

  constructor(private http: Http) {
    this.results = this.name.valueChanges.switchMap(e => this.getResults(e))
  }

  getResults = (str) => {
    return this.http.get(`search/${str}`).map(res => res.json());
  }
}
