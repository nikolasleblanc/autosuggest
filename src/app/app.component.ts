import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
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
  results = Observable.of(['abc', '123']);

  constructor(private http: Http) {
    this.results = this.name.valueChanges.debounceTime(400).switchMap(e => this.getResults(e))
  }

  getResults = (str) => {
    return this.http.get(`search/${str}`).map(res => res.json())
      .catch(err => []);
  }
}
