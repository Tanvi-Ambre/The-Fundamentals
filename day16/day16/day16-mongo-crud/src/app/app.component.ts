import { Component, OnInit } from '@angular/core';
import { UserService } from './user.services';

@Component({
  selector: 'app-root',
  template : `
    <div class="container">
    <h1>IBM Users Application</h1>
    <table class="table">
    <thead>
      <tr>
        <th scope="col">Sl #</th>
        <th scope="col">User Name</th>
        <th scope="col">eMail</th>
        <th scope="col">City</th>
        <th scope="col">Edit</th>
        <th scope="col">Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let user of userslist; index as idx">
        <th scope="row">{{ idx + 1 }}</th>
        <td>{{ user.username }}</td>
        <td>{{ user.usermail }}</td>
        <td>{{ user.usercity }}</td>
        <td>
          <button class="bi bi-pencil-square btn btn-warning" (click)="editHandler(user)"> Edit User</button>
        </td>
        <td>
          <button class="bi bi bi-trash btn btn-danger" (click)="deleteHandler(user)"> Delete User</button>
        </td>
      </tr>
    </tbody>
  </table>

  <ng-template [ngIf]="!editUser">
  <h2>Add User</h2>
  <div class="mb-3">
    <label for="username" class="form-label">User Name</label>
    <input type="text" [(ngModel)]="userobj.username" class="form-control" id="username" placeholder="Enter User Name Here ">
  </div>
  <div class="mb-3">
    <label for="usermail" class="form-label">User Mail</label>
    <input type="text" [(ngModel)]="userobj.usermail" class="form-control" id="usermail" placeholder="Enter User Mail Here ">
  </div>
  <div class="mb-3">
    <label for="usercity" class="form-label">User City</label>
    <input type="text"  [(ngModel)]="userobj.usercity" class="form-control" id="usercity" placeholder="Enter User City Here ">
  </div>
  <div class="mb-3">
    <button type="submit" (click)="addUser()" class="btn btn-primary mb-3">Add User</button>
  </div>
  </ng-template>

  <ng-template [ngIf]="editUser">
  <h2>Edit {{ editUserobj.username || 'User'}}</h2>
  <div class="mb-3">
    <label for="username" class="form-label">User Name</label>
    <input type="text" [(ngModel)]="editUserobj.username" class="form-control" id="username" placeholder="Enter User Name Here ">
  </div>
  <div class="mb-3">
    <label for="usermail" class="form-label">User Mail</label>
    <input type="text" [(ngModel)]="editUserobj.usermail" class="form-control" id="usermail" placeholder="Enter User Mail Here ">
  </div>
  <div class="mb-3">
    <label for="usercity" class="form-label">User City</label>
    <input type="text"  [(ngModel)]="editUserobj.usercity" class="form-control" id="usercity" placeholder="Enter User City Here ">
  </div>
  <div class="mb-3">
    <button type="submit" (click)="updateUser()" class="btn btn-primary mb-3">Update User</button>
  </div>
  </ng-template>  
    </div>
  `
})
export class AppComponent implements OnInit {
  title = 'day16-mongo-crud';
  userslist;
  userobj = { username : '', usermail : '', usercity : ''};
  editUserobj;
  editUser = false;
  constructor(private userSer:UserService){}

  refresh(){
    this.userSer.getUsers().subscribe( res => {
      this.userslist = res
    } );
  }
  ngOnInit(){
    this.refresh();
  }
  addUser(){
    if( this.userobj.username && this.userobj.usermail && this.userobj.usercity ){
          this.userSer.postUser(this.userobj).subscribe( res => {
          this.refresh();
          this.userobj = { username : '', usermail : '', usercity : ''};
    }, error => {
      console.log(error);
    } );
    }else{
      alert("do add user data")
    }

  }
  editHandler(userinfo){
    this.userSer.selectToUpdate(userinfo).subscribe((res)=>{
      this.editUserobj = res;
      this.editUser = true;
    })
  }
  updateUser(){
    this.userSer.updateUser(this.editUserobj).subscribe(res => {
      this.editUser = false;
      this.refresh();
    })
  }
  deleteHandler(userinfo){
    this.userSer.deleteUser(userinfo).subscribe((res) => {
      this.refresh();
    })
  }
}
