import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'sandbox',
    template: `
    <div class="container">
      <form (submit)="onSubmit(isEdit)">
        <div class="form-group">
          <label>Name:</label>
          <input type="text"
                 class="form-control"
                 [(ngModel)]="user.name"
                 name="name">
        </div>

        <div class="form-group">
          <label>Email:</label>
          <input type="text"
                 class="form-control"
                 [(ngModel)]="user.email"
                 name="email">
        </div>

        <div class="form-group">
          <label>Phone:</label>
          <input type="text"
                 class="form-control"
                 [(ngModel)]="user.phone"
                 name="phone">
        </div>

        <input type="submit" value="{{ isEdit ? 'Update' : 'Submit' }}" class="btn btn-success">
      </form>

      <br>

      <div *ngFor="let user of users">
        <div class="well">
          <ul class="list-group">
            <li class="list-group-item">
              Name: {{user.name}}
            </li>
            <li class="list-group-item">
              Email: {{user.email}}
            </li>
            <li class="list-group-item">
              Phone: {{user.phone}}
            </li>
          </ul>
          <br>
          <button class="btn btn-sm btn-primary" (click)="onEditClick(user)">Edit</button>
          <button class="btn btn-sm btn-danger" (click)="onDeleteClick(user.id)">Delete</button>
          <br><br>
        </div>
      </div>
    </div>
    `,
    standalone: false
})
export class SandboxComponent implements OnInit {
    users: any[] = [];

    user = {
        id: '',
        name: '',
        email: '',
        phone: ''
    };

    isEdit = false;

    constructor(public dataservice: DataService) {}

    ngOnInit() {
        this.refreshUsers();
    }

    private refreshUsers() {
        this.dataservice.getUsers().subscribe(users => {
            this.users = users;
        });
    }

    private resetForm() {
        this.isEdit = false;
        this.user = { id: '', name: '', email: '', phone: '' };
    }

    onSubmit(isEditFlag: boolean) {
        if (isEditFlag) {
            this.dataservice.updateUser(this.user).subscribe(() => {
                this.refreshUsers();
                this.resetForm();
            });
            return;
        }

        this.dataservice.addUser(this.user).subscribe(() => {
            this.refreshUsers();
            this.resetForm();
        });
    }

    onDeleteClick(id: any) {
        this.dataservice.deleteUser(id).subscribe(() => {
            this.refreshUsers();
            this.resetForm();
        });
    }

    onEditClick(user: any) {
        this.isEdit = true;
        // copy to avoid mutating array item before save
        this.user = { ...user };
    }
}

