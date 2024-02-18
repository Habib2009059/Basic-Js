//1st way!
var a = 5; var b = 7; var tmp;
tmp = a;
a = b;
b = tmp;
console.log("After Swapping: a=",a, ",b=",b);
//2nd way!
var x = 4; var y = 6;
x = x + y;  //x=4+6
y = x - y;  //y=10-6
x = x - y;  //x=10-4 (from previous line y=4!!)
console.log("After Swapping: x=",x, ",y=",y);
//3rd way
var p = 3;
var q = 9;
[p,q] = [q,p];
console.log("After Swapping: p=",p, ",q=",q);
//max Number
var max = Math.max(a,b,x,y,p,q);
console.log(max);
