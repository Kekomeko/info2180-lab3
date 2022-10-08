window.onload=function(){
   gamePieces = [""];
     let squareDivs = document.getElementById("board").querySelectorAll("div");
       

      for(const item of squareDivs){
          item.className = "square"; 
      }

      for(const item of squareDivs){
         item.addEventListener("click", function(){
             if (gamePieces[gamePieces.length-1] == "O" || gamePieces[gamePieces.length-1] == ""){
               gamePieces.push ("X");
               item.textContent=("X");
               item.classList.add("X")
               
            }
         
            else if (gamePieces[gamePieces.length-1] == "X"){
               gamePieces.push ("O");
               item.textContent=("O");
               item.classList.add("O")
            }
         });
          item.addEventListener("mouseenter", function(){
            item.classList.add ("hover");

         });
         item.addEventListener("mouseleave", function(){
            item.classList.remove ("hover");
   
         });

         
      }  


   }