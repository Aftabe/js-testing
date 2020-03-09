
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
document.getElementById('array').innerHTML = 'People with the age of ' + over18 + ' can vote.';

function yesFuncton(value, index, array) {
   return value > 18;
}

// How to style HTML element using javascript

(function () {

   var divFoo = document.getElementById('foo'),
      style = divFoo.style;


   style.color = 'Hello';
   style.fontSize = '30px';
   style.border = '3px solid black';
   style.padding = '5px';
   style.backgroundColor = 'yellowgreen';


   alert(style.color);

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
          <li> total: ${doSomething(priceA,priceB)} </li>
   </ul>
   `;
function doSomething(priceA,priceB){
   return priceA + priceB;
}


   var demo = document.querySelector('#demoB');
   demo.innerHTML = html;
}());
