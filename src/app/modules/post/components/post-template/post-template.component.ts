import { Component, Input, OnInit } from '@angular/core';

import { IPostDto } from '@core/models';

@Component({
  selector: 'app-post-template',
  templateUrl: './post-template.component.html',
  styleUrls: ['./post-template.component.scss']
})
export class PostTemplateComponent implements OnInit {

  @Input() post: IPostDto | undefined;
  @Input() isPreview = false;

  constructor() { }

  ngOnInit(): void {
  }

}
