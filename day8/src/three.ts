interface IHero{
    city:string
    fullname():string
}
class Person implements IHero{
    city:string = "";
    fullname():string{
        return "";
    }
}
class Hero implements IHero{
    private mission = "some mission";
    static canTalk = true;
    constructor(public firstname:string, public city:string,  public lastname:string){ }
    static canFly():string{
        return "Flying";
    }
    fullname():string{
        return this.firstname+" "+this.lastname;
    }
    get accessMission(){
        return this.mission;
    }
    set accessMission(nmission){
        this.mission = nmission;
    }
};

let hero = new Hero("Bruce","Dayton","Banner");

document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll("h1")[0].innerText = hero.fullname();
})