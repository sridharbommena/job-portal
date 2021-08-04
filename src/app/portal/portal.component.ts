import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { posts } from '../input-data/input';
import { post } from '../models/post';
import { SharedService } from '../SharedService';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {

  constructor(private router:Router,private sharedService:SharedService) { }

  posts:post[] = [];

  ngOnInit(): void {
    this.posts = posts;
  }


  handleClick(post:post)
  {
    this.sharedService.setPostData(post);
    this.router.navigate(["/job-details"]);
  }

}
