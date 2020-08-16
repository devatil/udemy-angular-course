import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  connection = environment.api.nestjs.role + '/role';
  constructor(private http: HttpClient) {}

  getRoleData() {
    return this.http.get<any>(this.connection);
  }
}
