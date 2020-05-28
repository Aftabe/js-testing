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


persons.sort();


document.getElementById('js-demo').innerHTML = persons;