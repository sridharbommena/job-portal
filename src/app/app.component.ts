import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { post } from './models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor() { }
  ngOnInit(): void {
  }

}
