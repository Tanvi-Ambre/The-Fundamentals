import Person from "./Person.js";

export class Hero extends Person{
    firstname = "";
    lastname = "";
    _mission = "some mission";

    static canTalk = true;

    constructor(fn, ln, cty){
        super(cty);
        this.firstname = fn;
        this.lastname = ln;
    }

    static canFly(){
        return "Flying";
    }
    fullname(){
        return this.firstname+" "+this.lastname;
    }
    get mission(){
        return this._mission;
    }
    set mission(nmission){
        this._mission = nmission;
    }
};