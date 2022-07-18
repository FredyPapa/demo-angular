import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<any[]>(`${environment.api}/customers`);
}

delete(id: number) {
    return this.http.delete(`${environment.api}/customers/${id}`);
}

post(params: any) {
    return this.http.post(`${environment.api}/customers`, params);
}

put(id: number, params: any) {
    return this.http.put(`${environment.api}/customers/${id}`, params);
}

}
