var biscuitPrice = 10;
var biscuitAmount = 4;
if (biscuitPrice > 10 && biscuitAmount==4) {
    console.log('I will eat Biscuits!');
}
else{
    console.log('Tea is better!!');
}
//Array
var friendsAge = [12,11,19,16]; //.sort(), .reverse(),
friendsAge[3] = 15; //index 3 means 16 will be updated to 15!!
console.log('Index is',friendsAge.indexOf(11));
console.log(friendsAge.slice(1,3));  //print index 1 to 2
friendsAge.push(22);    //push at last!
friendsAge.unshift(8);  //push at fast!
console.log('Length of Array:',friendsAge.length);
console.log(friendsAge);