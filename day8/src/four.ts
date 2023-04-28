function addPower(config:object){
    return function(targetClass:any){
        let tc = new targetClass();
        return class{
            firstname = tc.firstname;
            lastname = tc.lastname;
            power = config.pow;
        }
    }
};

@addPower({
    pow : 6
}) 
class Batman{
    firstname = "Bruce";
    lastname = "Wayne"
}

// let heroInMaking = addPower(5)(Batman);

console.log(new Batman());