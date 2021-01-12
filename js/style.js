const btns = document.querySelectorAll('button');
for(i = 0; i < btns.length; i++){
   btns[i].onclick = function(){
      // let classL = this.innerHTML.toLowerCase();
      // document.body.style.backgroundColor = 'green';
      document.body.classList.add('grey');
    

      
   }
}