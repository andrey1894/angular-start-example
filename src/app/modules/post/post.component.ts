import { Component, OnInit } from '@angular/core';

import { PostApiService } from '@core/api';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(private postApiService: PostApiService) { }

  ngOnInit(): void { }

}
