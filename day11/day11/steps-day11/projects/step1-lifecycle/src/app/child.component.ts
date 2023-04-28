import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from "@angular/core";

@Component({
    selector : 'app-child',
    template : `
        <h1>Child Component</h1>
        <h2>Power is : {{ power }}</h2>
    `
})
export class ChildComp implements   OnInit, 
                                    OnChanges, 
                                    OnDestroy, 
                                    DoCheck,
                                    AfterContentInit,
                                    AfterContentChecked,
                                    AfterViewInit,
                                    AfterViewChecked{
    @Input() power = 0;
    constructor(){
        console.log("constructor of ChildComp was called 1");
    }
    ngOnInit(){
        console.log("ngOnInit of ChildComp was called", arguments.length);
    }
    ngDoCheck(){
        console.log("ngDoCheck of ChildComp was called");
    }
    ngAfterContentInit(){
        console.log("ngAfterContentInit of ChildComp was called");
    }
    ngAfterContentChecked(){
        console.log("ngAfterContentChecked of ChildComp was called");
    }
    ngAfterViewInit(){
        console.log("ngAfterViewInit of ChildComp was called");
    }
    ngAfterViewChecked(){
        console.log("ngAfterViewChecked of ChildComp was called");
    }
    ngOnChanges(args){
        if(args.power.currentValue === 5){
            this.power = 500;
        }
        console.log("ngOnChanges of ChildComp was called", args.power);
    }
    ngOnDestroy(){
        console.log("ngOnDestroy of ChildComp was called");
    }
}