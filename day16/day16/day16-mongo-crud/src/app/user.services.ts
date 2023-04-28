import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class UserService{
    constructor( private http:HttpClient ){}

    getUsers(){
        return this.http.get("http://localhost:5050/users/");
    }
    postUser(user){
        return this.http.post("http://localhost:5050/users/add", user);
    }
    deleteUser(user){
        return this.http.delete("http://localhost:5050/users/delete/"+user._id);
    }
    selectToUpdate(user){
        return this.http.get("http://localhost:5050/users/edit/"+user._id);
    }
    updateUser(user){
        return this.http.post("http://localhost:5050/users/edit/"+user._id, user);
    }

}