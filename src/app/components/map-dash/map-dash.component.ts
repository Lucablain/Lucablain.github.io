import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/dataService";
import {Observable} from "rxjs/index";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-map-dash',
  templateUrl: './map-dash.component.html',
  styleUrls: ['./map-dash.component.css'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({opacity: 0}),
          animate('500ms', style({opacity: 1}))
        ]),
        transition(':leave', [
          style({opacity: 1}),
          animate('100ms', style({opacity: 0}))
        ])
      ]
    )
  ],
})
export class MapDashComponent implements OnInit {
  mapSelected: string;
  mapSelected$: Observable<string>;

  mapOnOver: any;

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

  getMapElement() {
    return this.mapElement.find(mapElement => mapElement.type === this.mapOnOver);
  }

  mapElement = [
    { type: 'classes',
      nom: 'Nos Classes'
    },
    { type: 'info',
      nom: 'Salles informatique'
    },
    { type: 'amphi',
      nom: 'L\'amphithâtre'
    },
    { type: 'sanit',
      nom: 'Les sanitaires'
    },
    { type: 'reunion',
      nom: 'Salle de réunion'
    },
    { type: 'prof',
      nom: 'Salle des profs'
    },
    { type: 'ifag',
      nom: 'Ifag'
    },
    { type: 'lab',
      nom: 'MY DIL LAB'
    },
    { type: 'bur1',
      nom: 'Bureau'
    },
    { type: 'bur2',
      nom: 'Bureau'
    },
    { type: 'bur1',
      nom: 'Bureau'
    },
    { type: 'bur3',
      nom: 'Bureau'
    },
    { type: 'bur4',
      nom: 'Bureau'
    },
    { type: 'bur5',
      nom: 'Bureau'
    }
  ]
}
