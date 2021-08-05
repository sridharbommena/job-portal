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
    this.posts.sort(function(a, b) {
      var keyA = new Date(a.post_date),
        keyB = new Date(b.post_date);
      // Compare the 2 dates
      if (keyA < keyB) return 1;
      if (keyA > keyB) return -1;
      return 0;
    });
  }

  handleClick(job_id:number)
  {
    this.router.navigate(["/job-details",job_id]);
  }

}
