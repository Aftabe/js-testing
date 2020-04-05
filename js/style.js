
function doSomething() {
   var string = document.getElementById('demo');
   let mod = string.innerHTML.toUpperCase();
   document.getElementById('demo').innerHTML = mod;
}

doSomething();

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
document.getElementById('array').innerHTML = 'People with the age of ' + over18 + ' can vote.';

function yesFuncton(value, index, array) {
   return value > 19;
}

// How to style HTML element using javascript

(function () {

   var divFoo = document.getElementById('foo'),
      style = divFoo.style;


   style.color = 'green';
   style.fontSize = '30px';
   style.border = '3px solid black';
   style.padding = '5px';
   style.backgroundColor = '#343f33';


   // alert(style.color);

}());
// Template literals or template strings
// Step one is going to be old method
(function () {

   const productA = 'Book',
      priceA = '$' + 20,
      productB = 'bag',
      priceB = '$' + 30;

   let html;
   html = '<ul>' +
      '<li> item:' + productA + '</li>' +
      '<li> price:' + priceA + '</li>' +
      '<li> item:' + productB + '</li>' +
      '<li> item:' + priceB + '</li>' +
      '<li> total:' + priceA + priceB + '</li>' +
      '</ul>';


   var demo = document.querySelector('#demoA');
   demo.innerHTML = html;
}());

//New method
(function () {

   const productA = 'Book',
      priceA = '$' + 20,
      productB = 'bag',
      priceB = 30;

   let html;
   html = `
   <ul>
   <li> item: ${productB} </li>
          <li> price: ${priceA} </li>
          <li> item: ${productB} </li>
          <li> price: ${priceB} </li>
          <li> total: ${doSomething(priceA, priceB)} </li>
   </ul>
   `;
   function doSomething(priceA, priceB) {
      return priceA + priceB;
   }


   var demo = document.querySelector('#demoB');
   demo.innerHTML = html;
}());
// Function expression syntex
(function () {
   var saySomeThing = function () {
      var sum = 1500 + 520;
      alert(sum);
   };

   saySomeThing();
}());

   // While loops     using imediatly invoked function 
   (function () {

      const names = ['Ali', 'Khadim', 'Sadiq'],
         mod = names.length;


      let i = 0;  // initialization

      while (i < mod) {  //condition

         alert(`${i}`);
         i++;   // incremention
      }
   }());
// Local storage inside the immediatly invoked function
(function () {

}());

let localStorageContent = localStorage.getItem('name');

let names;
if (localStorageContent === null) {
   names = [];
} else {
   names = JSON.parse(localStorageContent);
}

// console.log(JSON.parse(localStorageContent));

// names = 'This is where you can learn coding';
names.push('Samadi');

localStorage.setItem('name', JSON.stringify(names));
