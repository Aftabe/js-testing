// testing
var cars = ["", "Volvo", "BMW"];


cars[0] = new Date();
cars[2] = myFunction('Ali', 'Karimi');


// mod;


// mod = cars[0].push('Toyota');

function myFunction(p1, p2){
   var txt = 'Hey dear ' + p1 + " " + p2 + ' Welcome to our party';
   // document.getElementById('demoA').innerHTML = txt;
   return txt;
}



document.getElementById("demo").innerHTML = cars;
console.log(typeof mod);


// new arrays
var persons = ['Ali', 'Khadim', 'Sadiq', 'Bashir'];
var numbers = [20, 40, 10, 60, 4];


persons.sort();

numbers.sort(function(a, b){
   return a - b;
});


document.getElementById('js-demo').innerHTML = persons;
document.getElementById('js-demo').innerHTML = numbers;