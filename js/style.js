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
document.addEventListener('click', function(){
   var doc = document.body.style;
   doc.backgroundColor = 'green';
   doc.color = 'white';
   doc.fontSize = '40px';
   alert('Background color will be changed green');
})

// comn
var comn = document.getElementById('comn');
comn.addEventListener("click", changeAll)

function changeAll(){
   document.body.style.backgroundColor = 'red';
}