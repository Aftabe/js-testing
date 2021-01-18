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
   alert('Background color will be changed');
})