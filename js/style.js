const btns = document.querySelectorAll('button');
for(i = 0; i < btns.length; i++){
   btns[i].onclick = function(){
      var className = this.innerHTML.toLowerCase();
      document.body.className = className;

    

      
   }
}