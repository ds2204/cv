import { Services } from './../configuration';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Services',
  templateUrl: './skills.component.html'
})
export class skillsComponent implements OnInit {

  _services:any;
  constructor() {
    this._services=Services;
   }
   userDetail = true;
   showUserDetailsToggle() {
     this.userDetail = !this.userDetail;//!false
   }
   //class to show the change in + and - in the button
   getClass() {
     var classList = '';
     if (this.userDetail) {
       classList = 'fa fa-plus';
     } else {
       classList = 'fa fa-minus';
     }
     return classList;
   }
  ngOnInit() {
  }

}