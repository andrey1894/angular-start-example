import { Component, OnInit } from '@angular/core';

import { PostApiService } from '@core/api';
import { IPostDto } from '@core/models';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: IPostDto[] = [];

  constructor(private postApiService: PostApiService) { }

  ngOnInit(): void {
    this.postApiService.getPosts().subscribe(posts => {
      this.posts = posts
    })
  }

}
