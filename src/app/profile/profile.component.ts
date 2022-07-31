import { SocialMedia } from './../configuration';
import { Component, OnInit } from '@angular/core';
import { Configuration } from '../configuration';

@Component({
  selector: 'app-Profile',
  templateUrl: './Profile.component.html',
  styleUrls: ['./Profile.component.css']
})
export class ProfileComponent implements OnInit {

  _profileUrl:string;
  _userName:string;
  _userJob:string;
  _userLocation:string;
  _userEmail:string;
  _userDateOfBirth:string;
  _github:string;
  _linkedin:string;
  

 
  _facebook:string;
  constructor() { 
    this._profileUrl=Configuration.profileUrl;
    this._github=SocialMedia.github;
    
    this._facebook=SocialMedia.facebook;
   
    this._linkedin=SocialMedia.linkedin;
    
    this._userName=Configuration.userName;
    this._userJob=Configuration.userJob;
    this._userLocation=Configuration.userLocation;
    this._userDateOfBirth=Configuration.userDateOfBirth;
    this._userEmail=Configuration.userEmail;
  }

  ngOnInit() {
  }

}