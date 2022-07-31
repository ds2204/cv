import { Component, OnInit } from '@angular/core';
import { Testimonials } from '../configuration';

@Component({
  selector: 'app-Testimonials',
  templateUrl: './cert.component.html',

})
export class CertComponent implements OnInit {

  _testimonials:any;
  constructor() { 
    this._testimonials=Testimonials;
  }

  ngOnInit() {
  }
}