import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {

  @Input() inRequest = false;
  @Output() login = new EventEmitter<{ name: string, password: string }>();

  name = 'test'
  password = 'test'

  constructor() { }

  ngOnInit(): void { }

  submit(): void {
    this.login.emit({
      name: this.name,
      password: this.password
    })
  }

}
