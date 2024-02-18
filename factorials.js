//1st way
var factorial = 1;
for(var i =1; i<4; i++){
    factorial = factorial * i;
    console.log('Facto of',i,'is',factorial);
}
//2nd way
function factorial2(n){
    var factorial2 =1;
    for(var i=1; i<=n; i++){
        factorial2 = factorial2 * i;
    }
    return factorial2;
}
var result = factorial2(6);
console.log(result);
//3rd way using while loop
var i=1;
var factorial3 =1;
while(i<=5){
    factorial3 = factorial3 * i;
    i++;
}
console.log(factorial3);
//4th way recursive
function factorial4(n4){
    if(n4==0){
    return 1;
    }
    else{
       return n4*factorial4(n4-1);
    }
}
var result4 = factorial4(7);    //answer: 5040
console.log(result4);