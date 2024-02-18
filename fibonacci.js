
//1st way iterative
var fibo =[0,1];
for(var i=2; i<=10;i++){
    fibo[i] = fibo[i-1]+fibo[i-2];
    console.log(fibo[i],fibo[i-1],fibo[i-2]);
}
console.log(fibo);
//2nd way recursive
function fibonacci(n){
    if(n == 0){
        return 0;
    }
    if(n ==1){
        return 1;
    }
    else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
var result = fibonacci(10); //it will show the 10th fibo at o/p
console.log(result);
//3rd type recursive series
function fiboSeries(n){
    if(n == 0){
        return [0];
    }
    else if(n == 1){
        return [0,1];
    }
    else {
        var series = fiboSeries(n-1);
        var nextElement = fiboSeries[n-1] + fiboSeries[n-2];
        series.push(nextElement);
        return series;
    }
}
var consequence = fiboSeries(11);
console.log(consequence);
