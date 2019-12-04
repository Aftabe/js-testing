function doSomething() {
   var string = document.getElementById('demo').innerHTML;
   document.getElementById('demo').innerHTML = string.toUpperCase();
}

function myFunction() {
   var age, voteable;
   age = Number(document.getElementById('age').value);
   if (isNaN(age)) {
      voteable = 'Input is not a number.';
   } else {
      voteable = (age < 18) ? "Too young" : "Old enough.";
   }
   document.getElementById("demo1").innerHTML = voteable + " to vote.";
}

// compainring differnt types
document.getElementById("demo2").innerHTML = '3' > '23';

// Using javScript how to get full year on a webpage.
var getFullYear = new Date();
document.getElementById("newyear").innerHTML = getFullYear.getFullYear();



// identifiers operators
var comx = '7' === 7;
document.getElementById('test').innerHTML = comx;

// array
var ages = [12, 17, 30, 18, 45, 57];
var over18 = ages.filter(yesFuncton);
document.getElementById('array').innerHTML = 'People with the age of ' +  over18 + ' can vote.';

function yesFuncton(value, index, array){
   return value > 18;
}

// How to style HTML element using javascript

(function(){

   var divFoo = document.getElementById('foo'),
        style = divFoo.style;


   style.color = 'green';
   style.fontSize = '30px';
   style.border = '3px solid black';
   style.padding = '5px';
   style.backgroundColor = 'yellowgreen';


   alert(style.color);

}());

// scope in javascript

var globalVar = 'This is a global variable.';

function gloabalFunction() {
   alert(globalVar);
   globalVar = 'The value had been modified.';
};

gloabalFunction();
alert(globalVar);