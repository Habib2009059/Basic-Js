var n1 = 23;
var n2 = '12.4';    //like string
n2 = parseFloat(n2);
n2 = Math.ceil(n2); //upper value nibe shb shomoy....n2=13. r jodi 'math.floor' kortam n2=12 hoto
console.log('Sum is:',n1+n2);
//random number generation
var number = Math.random()*100;
var result = Math.round(number);
console.log('Random no is:',result);