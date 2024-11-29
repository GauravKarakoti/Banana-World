
let h1=document.querySelector("h1")
let unlockButton = document.getElementById("btn1");

unlockButton.style.display = "none";
 
    document.getElementById("change5").addEventListener("click", function(){
        document.getElementById("change1").src="Unlocked Key.png"
    document.getElementById("change2").src=""
    document.getElementById("change3").src=""
    document.getElementById("change4").src=""
    document.getElementById("change5").src=""
    document.getElementById("change6").src=""
    h1.innerHTML="YOU FOUND THE KEY !! CONGRATULATIONS"
    unlockButton.style.display = "block";



   



    

    })

document.getElementById("btn1").addEventListener("click",function(){
     window.location.href="index.html"
})
document.getElementById("change1").addEventListener("click", function(){
    h1.innerText= "BETTER LUCK NEXT TIME"

})
document.getElementById("change2").addEventListener("click", function(){
    h1.innerText= "BETTER LUCK NEXT TIME"

})
document.getElementById("change3").addEventListener("click", function(){
    h1.innerText= "BETTER LUCK NEXT TIME"

})
document.getElementById("change4").addEventListener("click", function(){
    h1.innerText= "BETTER LUCK NEXT TIME"

})
document.getElementById("change6").addEventListener("click", function(){
    h1.innerText= "BETTER LUCK NEXT TIME"

})







