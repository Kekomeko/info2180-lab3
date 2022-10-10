window.onload=function(){
   gamePieces = [""];
   let squareDivs = document.getElementById("board").querySelectorAll("div");
   let winner = document.getElementById("status");
   let button = document.getElementsByClassName("btn")[0];
   
       

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
         if ((squareDivs[0].textContent == "X" && squareDivs[1].textContent == "X" && squareDivs[2].textContent == "X")
         ||(squareDivs[3].textContent == "X" && squareDivs[4].textContent == "X" && squareDivs[5].textContent == "X")
         ||(squareDivs[6].textContent == "X" && squareDivs[7].textContent == "X" && squareDivs[8].textContent == "X")//rows
         ||(squareDivs[0].textContent == "X" && squareDivs[3].textContent == "X" && squareDivs[6].textContent == "X")
         ||(squareDivs[1].textContent == "X" && squareDivs[4].textContent == "X" && squareDivs[7].textContent == "X")
         ||(squareDivs[2].textContent == "X" && squareDivs[5].textContent == "X" && squareDivs[8].textContent == "X")//columns
         ||(squareDivs[0].textContent == "X" && squareDivs[4].textContent == "X" && squareDivs[8].textContent == "X")
         ||(squareDivs[2].textContent == "X" && squareDivs[4].textContent == "X" && squareDivs[6].textContent == "X")//diagonal
         ){
            winner.textContent=("Congratulations! X is the Winner!");
            console.log(winner);
            winner.classList.add("you-won")
         }
         else if ((squareDivs[0].textContent == "O" && squareDivs[1].textContent == "O" && squareDivs[2].textContent == "O")
         ||(squareDivs[3].textContent == "O" && squareDivs[4].textContent == "O" && squareDivs[5].textContent == "O")
         ||(squareDivs[6].textContent == "O" && squareDivs[7].textContent == "O" && squareDivs[8].textContent == "O")//rows
         ||(squareDivs[0].textContent == "O" && squareDivs[3].textContent == "O" && squareDivs[6].textContent == "O")
         ||(squareDivs[1].textContent == "O" && squareDivs[4].textContent == "O" && squareDivs[7].textContent == "O")
         ||(squareDivs[2].textContent == "O" && squareDivs[5].textContent == "O" && squareDivs[8].textContent == "O")//columns
         ||(squareDivs[0].textContent == "O" && squareDivs[4].textContent == "O" && squareDivs[8].textContent == "O")
         ||(squareDivs[2].textContent == "O" && squareDivs[4].textContent == "O" && squareDivs[6].textContent == "O")//diagonal
         ){
            winner.textContent=("Congratulations! O is the Winner!");
            console.log(winner);
            winner.classList.add("you-won")
         }

      });

      item.addEventListener("mouseenter", function(){
         item.classList.add ("hover");

      });
      item.addEventListener("mouseleave", function(){
         item.classList.remove ("hover");

      });  
      button.addEventListener("click", function(){
         item.classList.remove("X");
         item.classList.remove("O");
         item.textContent=("");
         item.textContent=("");
         winner.textContent =("Move your mouse over a square and click to play an X or an O.");
         winner.classList.remove("you-won")
         gamePieces = [""];
         
      });
     
   }
   
   
               
}  
                       

         
      
   
