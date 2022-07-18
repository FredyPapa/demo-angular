import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  post(params: { username: string; password: string }) {
    return this.http.post(`${environment.api}/user`, params);
  }

  paginate() {
    const user = JSON.parse(environment.storage.getItem('user') as string);

    return this.http.get(`${environment.api}/user/paginate`, {
      params: {
        limit: 2,
        page: 1
      },
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    });
  }
}
