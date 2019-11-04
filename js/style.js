function doSomething() {
   var string = document.getElementById('demo').innerHTML;
   document.getElementById('demo').innerHTML = string.toUpperCase();
}

function myFunction() {
   var age, voteable;
   age = Number(document.getElementById('age').value);
   if (isNaN(age)) {
      voteable = 'Input is not a number';
   } else {
      voteable = (age < 18) ? "Too young" : "Old enough";
   }
   document.getElementById("demo1").innerHTML = voteable + " to vote.";
}

// compainring differnt types
document.getElementById("demo2").innerHTML = '3' > '23';