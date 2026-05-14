import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {

    constructor(public http: HttpClient) {
    }

    private readonly baseUrl = 'http://localhost:3000/users';

    getUsers(): Observable<any> {
        return this.http.get(this.baseUrl);
    }

    addUser(user: any): Observable<any> {
        return this.http.post(this.baseUrl, user);
    }

    deleteUser(id: any): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

    updateUser(user: any): Observable<any> {
        return this.http.put(`${this.baseUrl}/${user.id}`, user);
    }
}

