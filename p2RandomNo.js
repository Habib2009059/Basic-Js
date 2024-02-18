    //1st part
    var num = 2.49885;
    var result = Math.floor(num);   //  o/p:2
    var result2 = Math.ceil(num);   //  o/p:3
    var result3 = Math.round(num);  //  o/p:2
    //Single Random number generation
    var dice = Math.random()*6;
    var consequence = Math.round(dice);
    console.log("Single Random number is:",consequence);
    //Multiple Random number generation
    for(var i=0;i<=4;i++){
        var dices = Math.random()*6;
        var consequences = Math.round(dices);
        console.log("Multiple Random numbers are: ",consequences);
    }
