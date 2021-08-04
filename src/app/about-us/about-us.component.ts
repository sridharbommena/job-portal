import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openYoutube(){
    // the url,html tag should be called from here , how ?
    window.open("https://www.youtube.com/channel/UCy9nPS8M8zsaPh4R4dWYEyw");
    }

}
