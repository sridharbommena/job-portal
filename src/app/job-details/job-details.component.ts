import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { post } from '../models/post';
import { SharedService } from '../SharedService';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  constructor(private sharedService:SharedService) { }

  post:post = undefined;

  ngOnInit(): void {
    this.post = this.sharedService.getPostData();
  }

}
