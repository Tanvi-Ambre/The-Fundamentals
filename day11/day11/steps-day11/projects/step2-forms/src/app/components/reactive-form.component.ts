import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
/*
-----------------------------
HTML5 Validations
min
max
required
pattern
step
-----------------------------
Error Messages via CSS / JavaScript
untouched
touched
pristine
dirty
valid
invalid
-----------------------------
*/
@Component({
    selector : 'app-reactive-form',
    template : ` <h1> Data Driven Reactive Forms </h1>
<form [formGroup]="userForm" action="#" novalidate  >
<table>
    <tbody>
        <tr>
            <td> <label for="uname">User Name : </label> </td>
            <td> <input [formControlName]="'userName'" required  id="uname" > </td>
            <td> <span *ngIf="userForm.get('userName').invalid && userForm.get('userName').touched"> * Invalid Input </span> </td>
        </tr>
        <tr>
            <td> <label for="umail">User eMail : </label> </td>
            <td> <input [formControlName]="'userMail'" pattern=".+@.+" required id="umail" > </td>
            <td> <span *ngIf="userForm.get('userMail').invalid && userForm.get('userMail').touched"> * Invalid Input </span> </td>
        </tr>
        <tr>
            <td> <label for="uage">User Age : </label> </td>
            <td> <input [formControlName]="'userAge'" min="18" max="80" type="number" required id="uage" > </td>
            <td> <span *ngIf="userForm.get('userAge').invalid && userForm.get('userAge').touched"> * Invalid Input </span> </td>
        </tr>
        <tr>
            <td> </td>
            <td> <button type="submit" >Register</button> </td>
        </tr>
    </tbody>
</table>
</form>
    <button (click)="fillPartialData()">Fill Partial Data</button>
    <button (click)="fillCompleteData()">Fill Complete Data</button>
        <hr>
        <p>
            User Name : {{ userForm.get('userName').value }} <br/>
            User eMail : {{ userForm.get('userMail').value }} <br/>
            User Age : {{ userForm.get('userAge').value }} <br/>
        </p>
        <p>
            User Name : <ng-template [ngIf]="userForm.get('userName').untouched"> UnTouched | </ng-template>
                        <ng-template [ngIf]="userForm.get('userName').touched"> Touched | </ng-template>
                        <ng-template [ngIf]="userForm.get('userName').pristine"> Pristine | </ng-template>
                        <ng-template [ngIf]="userForm.get('userName').dirty"> Dirty | </ng-template>
                        <ng-template [ngIf]="userForm.get('userName').valid"> Valid | </ng-template>
                        <ng-template [ngIf]="userForm.get('userName').invalid"> Invalid </ng-template>
        </p>
        <p>
            User eMail : <span *ngIf="userForm.get('userMail').untouched"> UnTouched | </span>
                         <span *ngIf="userForm.get('userMail').touched"> Touched | </span>
                         <span *ngIf="userForm.get('userMail').pristine"> Pristine | </span>
                         <span *ngIf="userForm.get('userMail').dirty"> Dirty | </span>
                         <span *ngIf="userForm.get('userMail').valid"> Valid | </span>
                         <span *ngIf="userForm.get('userMail').invalid"> Invalid </span>
        </p>
        <p>
            User Age :  <span *ngIf="userForm.get('userAge').untouched"> UnTouched | </span>
                        <span *ngIf="userForm.get('userAge').touched"> Touched | </span>
                        <span *ngIf="userForm.get('userAge').pristine"> Pristine | </span>
                        <span *ngIf="userForm.get('userAge').dirty"> Dirty | </span>
                        <span *ngIf="userForm.get('userAge').valid"> Valid | </span>
                        <span *ngIf="userForm.get('userAge').invalid"> Invalid </span>
        </p>
    `,
    styles : [`
    tr td span{
        color : crimson
    }    
    tr td input.ng-invalid.ng-touched{
        border : 2px solid crimson
    }    
    tr td input.ng-valid.ng-touched{
        border : 2px solid darkseagreen
    }    
    `]
})
export class ReactiveDataForm implements OnInit{
   userForm:FormGroup;
   ngOnInit(){
        this.userForm = new FormGroup({
            userName : new FormControl('Tony'),
            userMail : new FormControl(),
            userAge : new FormControl()
        })
   }

   fillPartialData(){
       this.userForm.patchValue({
        userName : 'Tony',
        userMail : 'tony@stark.com'
       })
   }
   fillCompleteData(){
    this.userForm.setValue({
        userName : 'Peter',
        userMail : 'peter@parker.com',
        userAge : 19
       })
   }
}
