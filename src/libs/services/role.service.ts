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

  addNewRole(role: any) {
    return this.http.post<any>(this.connection, role);
  }

  editRole(role: any) {
    return this.http.put<any>(this.connection + `/${role.id}`, role);
  }
  deleteRole(role: any) {
    return this.http.delete<any>(this.connection + `/${role.id}`, role);
  }
}
