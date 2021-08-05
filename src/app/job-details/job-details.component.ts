import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { posts } from '../input-data/input';
import { post } from '../models/post';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  constructor(private router:ActivatedRoute) { }

  post:post = undefined;
  post_id = undefined;
  sim_posts:post[] = undefined;
  isSimilarpostsAvailable=false;
  temp_posts:post[] = undefined;

  ngOnInit(): void {
    this.post_id = this.router.snapshot.paramMap.get("job_id");
    posts.forEach(post => {
      if(post.id==this.post_id)
      {
        this.post = post;
      }  
    });
    // console.log(this.post);

    this.temp_posts = posts;
    this.sim_posts = this.temp_posts.sort(function(a, b) {
      var keyA = new Date(a.post_date),
        keyB = new Date(b.post_date);
      // Compare the 2 dates
      if (keyA < keyB) return 1;
      if (keyA > keyB) return -1;
      return 0;
    }).slice(0,4);
    this.isSimilarpostsAvailable = true;
  }

}
