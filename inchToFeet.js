function inchToFeet(inch){
    var feet = inch/12;
    return feet;
}
var array = [156,288,300];
for(var i =0; i<array.length;i++){
    var result = inchToFeet(array[i]);
    console.log(array[i],'Inch to feet is',result);
}