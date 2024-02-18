//access object elements
var student = {nam:'Ratul', id:101, no:3536};
var phoneNum1 = student.no; //1st way
var phoneNum2 = student['no'];   //2nd way
var mobileNum = 'no';   //object element stored in a variable!!
var phoneNum3 = student[mobileNum];  //3rd way
console.log('1st way->',phoneNum1);
console.log('2nd way->',phoneNum2);
console.log('3rd way->',phoneNum3);
//object elements update
student.no = 8261;  //1st way
student["no"] = 9545;   //2nd way
student[mobileNum] = 1920;  //3rd way(update through a variable)
console.log(student);
//add elements in object
student.address = 5555;
console.log(student);
 