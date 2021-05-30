import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ENV } from '@env/environment';
import { IPostDto } from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class PostApiService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<IPostDto[]> {
    return this.http.get<IPostDto[]>(`${ENV.api}posts`)
  }

  getPost(id: number): Observable<IPostDto> {
    return this.http.get<IPostDto>(`${ENV.api}posts/${id}`)
  }

}
