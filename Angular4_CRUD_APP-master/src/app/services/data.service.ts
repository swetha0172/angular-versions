import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

    constructor(public http: Http) {
    }

    private readonly baseUrl = 'http://localhost:3000/users';

    getUsers() {
        return this.http.get(this.baseUrl)
        .map(res => res.json());
    }

    addUser(user: any) {
        return this.http.post(this.baseUrl, user)
        .map(res => res.json());
    }

    deleteUser(id: any) {
        return this.http.delete(this.baseUrl + '/' + id)
        .map(res => res.json());
    }

    updateUser(user: any) {
        return this.http.put(this.baseUrl + '/' + user.id, user)
        .map(res => res.json());
    }
}

