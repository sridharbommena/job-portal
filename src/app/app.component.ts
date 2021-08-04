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
  // handleContactUs()
  // {
  //   var homeElement = document.getElementById("home");
  //   var companiesElement = document.getElementById("companies");
  //   var contactElement = document.getElementById("contact");
  //   homeElement.classList.remove("active");
  //   companiesElement.classList.remove("active");
  //   contactElement.classList.add("active");

  //   this.router.navigate(["/contact"]);
  // }

  // handle()
  // {

  // }

  // handleHome()
  // {
  //   var homeElement = document.getElementById("home");
  //   var companiesElement = document.getElementById("companies");
  //   var contactElement = document.getElementById("contact");
  //   homeElement.classList.add("active");
  //   companiesElement.classList.remove("active");
  //   contactElement.classList.remove("active");

  //   this.router.navigate(["/"]);
  // }

}
