
var container = document.getElementsByClassName("container")[0],
    div1 = document.getElementById("div1"),
    div2 = document.getElementById("div2"),
    div3 = document.getElementById("div3"),
    div4 = document.getElementById("div4"),
    div5 = document.getElementById("div5"),
    div6 = document.getElementById("div6"),
    div7 = document.getElementById("div7"),
    div8 = document.getElementById("div8"),
    div9 = document.getElementById("div9"),
    x=0;

    //När en av spelarna börja spela 
   
div1.onclick = function(){
   if(container.children[0].className ==""){
    if(container.children[x].className =="imgO"){
        div1.classList.add("imgX")
    }else{
        div1.classList.add("imgO")
    }
    x=0;
   }
    
  
}

div2.onclick = function(){
    if(container.children[1].className ==""){
    if(container.children[x].className =="imgO"){
        div2.classList.add("imgX")
    }else{
        div2.classList.add("imgO")
    }
    x=1;
}
}
div3.onclick = function(){
    if(container.children[2].className ==""){
        if(container.children[x].className=="imgO"){
            div3.classList.add("imgX")
        }else{
            div3.classList.add("imgO")
        }
    
    x=2;
}
}
div4.onclick = function(){
    if(container.children[3].className ==""){
    if(container.children[x].className=="imgO"){
        div4.classList.add("imgX")
    }else{
        div4.classList.add("imgO")
    }

x=3;
}
}
div5.onclick = function(){
    if(container.children[4].className ==""){
    if(container.children[x].className=="imgO"){
        div5.classList.add("imgX")
    }else{
        div5.classList.add("imgO")
    }

x=4;
}
}
div6.onclick = function(){
    if(container.children[5].className ==""){
    if(container.children[x].className=="imgO"){
        div6.classList.add("imgX")
    }else{
        div6.classList.add("imgO")
    }
}
x=5;
}
div7.onclick = function(){

if(container.children[6].className ==""){
    if(container.children[x].className=="imgO"){
        div7.classList.add("imgX")
    }else{
        div7.classList.add("imgO")
    }

x=6;
}
}

div8.onclick = function(){
    if(container.children[7].className ==""){
    if(container.children[x].className=="imgO"){
        div8.classList.add("imgX")
    }else{
        div8.classList.add("imgO")
    }

x=7;
}
}
div9.onclick = function(){
    if(container.children[8].className ==""){
    if(container.children[x].className=="imgO"){
        div9.classList.add("imgX")
    }else{
        div9.classList.add("imgO")
    }

x=8;
}
}


//Ifall spelarna vill omspela  
var playAgin = document.querySelector("button"),
win = document.getElementById("win");
        win.style.display ="none";

 playAgin.onclick = function(){

    for(i = 0 ; i<container.children.length-1;i++){
        container.children[i].classList.remove("imgO");
        container.children[i].classList.remove("imgX");
    }
    win.style.display = "none";
    
// När BoxWin komma up avbrytas spelen, Koden visar att när spelaren vill spela en gång till. 
    div1.onclick = function(){
        if(container.children[0].className ==""){
         if(container.children[x].className =="imgO"){
             div1.classList.add("imgX")
         }else{
             div1.classList.add("imgO")
         }
         x=0;
        }
         
       
     }
     
     div2.onclick = function(){
         if(container.children[1].className ==""){
         if(container.children[x].className =="imgO"){
             div2.classList.add("imgX")
         }else{
             div2.classList.add("imgO")
         }
         x=1;
     }
     }
     div3.onclick = function(){
         if(container.children[2].className ==""){
             if(container.children[x].className=="imgO"){
                 div3.classList.add("imgX")
             }else{
                 div3.classList.add("imgO")
             }
         
         x=2;
     }
     }
     div4.onclick = function(){
         if(container.children[3].className ==""){
         if(container.children[x].className=="imgO"){
             div4.classList.add("imgX")
         }else{
             div4.classList.add("imgO")
         }
     
     x=3;
     }
     }
     div5.onclick = function(){
         if(container.children[4].className ==""){
         if(container.children[x].className=="imgO"){
             div5.classList.add("imgX")
         }else{
             div5.classList.add("imgO")
         }
     
     x=4;
     }
     }
     div6.onclick = function(){
         if(container.children[5].className ==""){
         if(container.children[x].className=="imgO"){
             div6.classList.add("imgX")
         }else{
             div6.classList.add("imgO")
         }
     }
     x=5;
     }
     div7.onclick = function(){
     
     if(container.children[6].className ==""){
         if(container.children[x].className=="imgO"){
             div7.classList.add("imgX")
         }else{
             div7.classList.add("imgO")
         }
     
     x=6;
     }
     }
     
     div8.onclick = function(){
         if(container.children[7].className ==""){
         if(container.children[x].className=="imgO"){
             div8.classList.add("imgX")
         }else{
             div8.classList.add("imgO")
         }
     
     x=7;
     }
     }
     div9.onclick = function(){
         if(container.children[8].className ==""){
         if(container.children[x].className=="imgO"){
             div9.classList.add("imgX")
         }else{
             div9.classList.add("imgO")
         }
     
     x=8;
     }
     }
     
}


var result_1 =0,
    result_2 =0,
    player_1 = document.getElementById("player1"),
    player_2 = document.getElementById("player2");

     window.onclick = function(){
         if(win.style.display == "none"){
 //Här visar koden NÄR O-Team vinnar
   if(((container.children[0].className =="imgO" && container.children[1].className =="imgO" && container.children[2].className =="imgO")
   ||(container.children[0].className =="imgO" && container.children[3].className =="imgO" && container.children[6].className =="imgO") 
   ||( container.children[0].className =="imgO" && container.children[4].className =="imgO" && container.children[8].className =="imgO")
   ||(container.children[1].className =="imgO" && container.children[4].className =="imgO" && container.children[7].className =="imgO")
   || (container.children[2].className =="imgO" && container.children[5].className =="imgO" && container.children[8].className =="imgO")
   ||(container.children[3].className =="imgO" && container.children[4].className =="imgO" && container.children[5].className =="imgO") 
   ||(container.children[6].className =="imgO" && container.children[7].className =="imgO" && container.children[8].className =="imgO") 
   ||(container.children[2].className =="imgO" && container.children[4].className =="imgO" && container.children[6].className =="imgO") 
    )
   ){

        win.style.display = "block";
        win.style.padding = "10px";
        win.textContent = "PALYER 1 TEAME O WINS";
        //Räkning av hur många gånger O-TEAM VINNAR
        result_1=result_1+1;
        player_1.innerHTML = "PALYER 1 TEAME O<br>" +result_1  ;

        //om team-O vinnar avbytas spelen.
        div1.onclick = function(){
            e.preventDefault()
           }
        div2.onclick = function(e){
            e.preventDefault()
            }
        div3.onclick = function(e){
            e.preventDefault()
        }
        div4.onclick = function(e){
            e.preventDefault()
        }
        div5.onclick = function(e){
            e.preventDefault()
        }
        div6.onclick = function(e){
            e.preventDefault()
        }
        div7.onclick = function(e){
            e.preventDefault()
        }
        div8.onclick = function(e){
            e.preventDefault()
        }
        div9.onclick = function(e){
            e.preventDefault()
        }

   //När X-team vinnar
   }else if((container.children[0].className =="imgX" && container.children[1].className =="imgX" && container.children[2].className =="imgX")
   ||(container.children[0].className =="imgX" && container.children[3].className =="imgX" && container.children[6].className =="imgX") 
   ||(container.children[0].className =="imgX" && container.children[4].className =="imgX" && container.children[8].className =="imgX")
   ||(container.children[1].className =="imgX" && container.children[4].className =="imgX" && container.children[7].className =="imgX")
   ||(container.children[2].className =="imgX" && container.children[5].className =="imgX" && container.children[8].className =="imgX")
   ||(container.children[3].className =="imgX" && container.children[4].className =="imgX" && container.children[5].className =="imgX") 
   ||(container.children[6].className =="imgX" && container.children[7].className =="imgX" && container.children[8].className =="imgX") 
   ||(container.children[2].className =="imgX" && container.children[4].className =="imgX" && container.children[6].className =="imgX") ){

        win.style.display = "block";
        win.style.padding = "10PX";
        win.textContent = "PALYER 2 TEAME X WINS"; 

        // Räkning av hur många gånger X-TEAM VINNAR
        result_2=result_2+1;
        player_2.innerHTML = "PALYER 2 TEAME X<br>" +result_2  ;

        //När X-Team vinnar avbrytas spelen
        div1.onclick = function(){
            e.preventDefault()
        }
        div2.onclick = function(e){
         e.preventDefault()
       }
       div3.onclick = function(e){
         e.preventDefault()
       }
       div4.onclick = function(e){
         e.preventDefault()
       }
       div5.onclick = function(e){
         e.preventDefault()
      }
      div6.onclick = function(e){
         e.preventDefault()
      }
      div7.onclick = function(e){
         e.preventDefault()
      }
      div8.onclick = function(e){
         e.preventDefault()
      }
      div9.onclick = function(e){
         e.preventDefault()
     }

    }
         }
   
}
