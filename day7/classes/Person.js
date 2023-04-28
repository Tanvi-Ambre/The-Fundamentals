class Human{
    canWalk = "Yes I can Walk...";
};

export default class Person extends Human{
    city = "Gotham";
    constructor(ncity){
        super()
        this.city = ncity;
    }
};