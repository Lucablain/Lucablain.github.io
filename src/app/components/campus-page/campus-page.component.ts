import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/index";
import {DataService} from "../../services/dataService";

@Component({
  selector: 'app-campus-page',
  templateUrl: './campus-page.component.html',
  styleUrls: ['./campus-page.component.css']
})
export class CampusPageComponent implements OnInit {

  mapSelected: string;
  mapSelected$: Observable<string>;

  constructor(private dataService: DataService) {
    this.mapSelected$ = this.dataService.getMapSelected();
  }

  ngOnInit() {
    this.mapSelected = '';
    this.mapSelected$.subscribe(mapSelector => {
      this.mapSelected = mapSelector;
    });
  }

  setMapSelected(mapSelector) {
    this.dataService.setMapSelected(mapSelector)
  }

}
