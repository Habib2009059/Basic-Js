function explain_Callback(names,ages,tasks){
    console.log('Hllow!',names);
    console.log('Your age is ',ages);
    tasks();
}
function washHands(){
    console.log('Wash Hands with LifeBoy!');
}
function takeShower(){
    console.log('Take Shower with Dettol!');
}
explain_Callback('Shakib Hasan',24,washHands);
explain_Callback('Mushfiqur Rahim',28,takeShower);