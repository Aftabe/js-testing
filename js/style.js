(function () {
   const btns = document.querySelectorAll('button');
   for (i = 0; i < btns.length; i++) {
      btns[i].onclick = function () {
         var className = this.innerHTML.toLowerCase();
         document.body.className = className;
         // document.body.className = 'border';
      }
   }
}())

// This is for tesing js
// document.addEventListener('click', function(){
//    var doc = document.body.style;
//    doc.backgroundColor = 'green';
//    doc.color = 'white';
//    alert('Background color will be changed green');
// })



// comn




// var comn = document.getElementById('comn');
// comn.addEventListener("click", changeAll)

// function changeAll(){
//    document.body.style.backgroundColor = 'red';
// }

// // new-box
// var newBox = document.getElementById('new-box');
// newBox.addEventListener('click', doSomething);

// function doSomething(){
//    alert(1);
// }


// inp-btn
var btnClick = document.querySelector('.inp-btn');
btnClick.addEventListener('click', saySomething);


// saySomething function

function saySomething(e){
   e.preventDefault();
   document.body.style.backgroundColor = 'green';
   document.getElementById('new-box').style.border = '1px solid white';
}

