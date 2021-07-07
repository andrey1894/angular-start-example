import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { IUserDto } from '@core/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() user?: IUserDto | null
  @Output() logout = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
