import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {DataService} from '../../services/dataService';

@Component({
  selector: 'app-entreprise-page',
  templateUrl: './entreprise-page.component.html',
  styleUrls: ['./entreprise-page.component.css']
})
export class EntreprisePageComponent implements OnInit {
  schoolSelected$ : Observable<any>;
  schoolSelected : any;
  constructor(private dataService : DataService) {
    this.schoolSelected$ = this.dataService.getSchoolSelected();
  }

  ngOnInit() {
    this.schoolSelected$.subscribe(school => {
      this.schoolSelected = school;
    });
  }

}
