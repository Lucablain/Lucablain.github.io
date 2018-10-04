import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Location,LocationStrategy, PathLocationStrategy} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'workshop-september2018';
  path : string;

  constructor(){

  }

  ngOnInit(){
  }
}
