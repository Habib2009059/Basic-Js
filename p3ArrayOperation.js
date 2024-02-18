//Max value of array!!!
var marks = [67,87,62,97,60,90,99];
var max = marks[0];
for(var i=0;i<marks.length;i++){
    var element = marks[i];
    if(element>max){
        max = element;
    }
}
console.log("Maximum value is:",max);

//remove duplicate numbers
var id = [7,5,1,3,8,9,5,2,3,6];
var uniqueId = [];
for(var i=0;i<id.length;i++){
    var elemt = id[i];
    var index = uniqueId.indexOf(elemt);
    if(index == -1){    //iniqueId array te jodi element ta na thake tahole push korbe
        uniqueId.push(elemt);
    }
}
console.log('Array after removed duplicates',uniqueId);

//Sum elements of Array!!!
function arraySum(numbers){
    var sum =0;
    for(var i=0; i<numbers.length;i++){
        var elements = numbers[i];
        sum = sum + elements;
    }
    return sum;
}
var numbers = [67,87,62,97,60,90,99];
var result = arraySum(numbers); //function call and parameter pass!
console.log("Sum of all array elements is:",result);