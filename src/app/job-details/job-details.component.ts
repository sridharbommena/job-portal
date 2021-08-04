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

  ngOnInit(): void {
    this.post_id = this.router.snapshot.paramMap.get("job_id");
    posts.forEach(post => {
      if(post.id==this.post_id)
      {
        this.post = post;
      }  
    });

    console.log(this.post);
  }

}
