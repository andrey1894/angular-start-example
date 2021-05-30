import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

import { PostApiService } from '@core/api';
import { IPostDto } from '@core/models';

@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.scss']
})
export class PostInfoComponent implements OnInit {

  post: IPostDto | undefined

  constructor(
    private route: ActivatedRoute,
    private postApiService: PostApiService
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      map(params => +params['id']),
      switchMap(id => this.postApiService.getPost(id))
    ).subscribe(post => {
      this.post = post;
    })
  }

}
