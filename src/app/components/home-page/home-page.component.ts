import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/dataService";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  schoolSelected$ : Observable<any>;
  schoolSelected : any;
  constructor(private dataService : DataService) {
    this.schoolSelected$ = this.dataService.getSchoolSelected();
  }

  ngOnInit() {
    this.schoolSelected$.subscribe(school => {
      this.schoolSelected = school;
    })
  }

}
