import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/dataService";
import {Observable} from "rxjs/index";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {Router} from "@angular/router";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  schools: any[];
  schoolSelected$: Observable<any>;
  schoolSelected: any;

  constructor(private dataService: DataService, private router : Router) {
    this.schools = dataService.schools;
    this.schoolSelected$ = this.dataService.getSchoolSelected();
  }

  ngOnInit() {
    this.schoolSelected$.subscribe(school =>
      this.schoolSelected = school
    );
  }

  isSelectedSchool(id) {
    if (this.schoolSelected.id === id) {
      return 'on';
    }
    return 'off';
  }

  selectSchool(id) {
    this.dataService.setSchoolSelected(id);
  }

  goToSchool(){
    this.router.navigate(["home"]);
  }

}
