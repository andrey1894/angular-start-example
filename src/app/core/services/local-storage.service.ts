import { Injectable } from '@angular/core';

const TOKEN = 'token'

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {}

  getToken(): string {
    return localStorage.getItem(TOKEN) || '';
  }

  saveToken(token: string): void {
    localStorage.setItem(TOKEN, token);
  }

}
