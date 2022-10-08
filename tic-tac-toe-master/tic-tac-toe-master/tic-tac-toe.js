window.onload=function(){
 let squareDivs = document.getElementById("board").querySelectorAll("div");
 console.log(squareDivs);

 for(const item of squareDivs){
    item.className = "square";
 }
};