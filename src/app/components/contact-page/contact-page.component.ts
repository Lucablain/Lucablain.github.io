import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {DataService} from '../../services/dataService';

// @ts-ignore
@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
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
