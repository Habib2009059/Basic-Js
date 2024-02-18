var string = "Count the number of words in a string";
var count = 0;
for(var i = 0; i<string.length;i++){
    var character = string[i];
    if(character== " " && string[i-1]!= " "){
        count++;
    }
}
count++;    //this will count the last word as there is no space in the last
console.log('Counted words:',count);

//reverse string
function reverseString(statement){
    var reverse = "";
    for(var i=0; i<statement.length;i++){
        var character = statement[i];
        reverse = character + reverse;  //char k age & reverse k pore likhlei reverse hoy jabe!
    }
    return reverse;
}
statement = "Reverse the string!";
var consequence = reverseString(statement);
console.log('Reversed string:',consequence);