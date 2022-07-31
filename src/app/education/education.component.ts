import { Education } from './../configuration';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  
  _educations;
  constructor() { 
  
    this._educations=Education;
  }

  ngOnInit() {
  }

}