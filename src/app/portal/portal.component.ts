import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { posts } from '../input-data/input';
import { post } from '../models/post';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {

  constructor(private router:Router) { }

  posts:post[] = [];

  ngOnInit(): void {
    this.posts = posts;
  }

  handleClick(job_id:number)
  {
    this.router.navigate(["/job-details",job_id]);
  }

}
