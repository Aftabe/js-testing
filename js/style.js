function doSomething() {
   var string = document.getElementById('demo').innerHTML;
   document.getElementById('demo').innerHTML = string.toLowerCase();
}

function myFunction() {
   var age, voteable;
   age = document.getElementById('age').value;
   voteable = (age < 18) ? "Too young" : "Old enough";
   document.getElementById("demo1").innerHTML = voteable + " to vote.";
}