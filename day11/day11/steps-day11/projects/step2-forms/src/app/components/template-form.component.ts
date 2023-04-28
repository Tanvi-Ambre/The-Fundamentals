import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
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
    selector : 'app-template-form',
    template : ` <h1> Template Driven Forms </h1>
        <form (submit)="formSubmitHandler(myForm, $event)" action="#" #myForm="ngForm" name="myForm" novalidate  >
            <table>
                <tbody>
                    <tr>
                        <td> <label for="uname">User Name : </label> </td>
                        <td> <input #userName="ngModel" required [(ngModel)]="uname" id="uname" name="username" > </td>
                        <td> <span *ngIf="userName.invalid && userName.touched"> * Invalid Input </span> </td>
                    </tr>
                    <tr>
                        <td> <label for="umail">User eMail : </label> </td>
                        <td> <input #userEmail="ngModel" pattern=".+@.+" required [(ngModel)]="uemail" id="umail" name="usermail" > </td>
                        <td> <span *ngIf="userEmail.invalid && userEmail.touched"> * Invalid Input </span> </td>
                    </tr>
                    <tr>
                        <td> <label for="uage">User Age : </label> </td>
                        <td> <input #userAge="ngModel" min="18" max="80" type="number" required [(ngModel)]="uage" id="uage" name="userage" > </td>
                        <td> <span *ngIf="userAge.invalid && userAge.touched"> * Invalid Input </span> </td>
                    </tr>
                    <tr>
                        <td> </td>
                        <td> <button type="submit" >Register</button> </td>
                    </tr>
                </tbody>
            </table>
        </form>
        <hr>
        <p>
            User Name : {{ uname }} <br/>
            User eMail : {{ uemail }} <br/>
            User Age : {{ uage }} <br/>
        </p>
        <p>
            User Name : <ng-template [ngIf]="userName.untouched"> UnTouched | </ng-template>
                        <ng-template [ngIf]="userName.touched"> Touched | </ng-template>
                        <ng-template [ngIf]="userName.pristine"> Pristine | </ng-template>
                        <ng-template [ngIf]="userName.dirty"> Dirty | </ng-template>
                        <ng-template [ngIf]="userName.valid"> Valid | </ng-template>
                        <ng-template [ngIf]="userName.invalid"> Invalid </ng-template>
        </p>
        <p>
            User eMail : <span *ngIf="userEmail.untouched"> UnTouched | </span>
                         <span *ngIf="userEmail.touched"> Touched | </span>
                         <span *ngIf="userEmail.pristine"> Pristine | </span>
                         <span *ngIf="userEmail.dirty"> Dirty | </span>
                         <span *ngIf="userEmail.valid"> Valid | </span>
                         <span *ngIf="userEmail.invalid"> Invalid </span>
        </p>
        <p>
            User Age :  <span *ngIf="userAge.untouched"> UnTouched | </span>
                        <span *ngIf="userAge.touched"> Touched | </span>
                        <span *ngIf="userAge.pristine"> Pristine | </span>
                        <span *ngIf="userAge.dirty"> Dirty | </span>
                        <span *ngIf="userAge.valid"> Valid | </span>
                        <span *ngIf="userAge.invalid"> Invalid </span>
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
export class TemplateForm{
    uname = '';
    uemail = '';
    uage = '';
    formSubmitHandler(userform:NgForm, evt){
        evt.preventDefault();
        console.log(userform);
        console.log(evt.target);
        let userage = userform.form.controls.userage.value;
        if(userage < 18){
            alert("user is too young to join us");
        }else if(userage > 90){
            alert("user is too old to join us");
        }else{
            evt.target.submit();
        }
    }
}
