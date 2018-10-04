import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/dataService";
import {Observable} from "rxjs/index";
import {Location, LocationStrategy, PathLocationStrategy} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class HeaderComponent implements OnInit {
  deploy : boolean = false;
  path : string;

  schoolSelected$ : Observable<any>;
  schoolSelected : any;
  constructor(private dataService : DataService,private location : Location, private router : Router) {
    this.schoolSelected$ = this.dataService.getSchoolSelected();
  }

  ngOnInit() {
    this.path = this.location.path();
    this.schoolSelected$.subscribe(school => {
      this.schoolSelected = school;
    });

    this.router.events.subscribe(event => {
      if (this.location.path() !== this.path) {
        this.path = '' + this.location.path();
      }
    });
  }

}
