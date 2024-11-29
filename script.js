/*const keyButton=document.getElementById("key-button");
keyButton.addEventListener("click",()=>{
    alert("Key button Clicked! You've unlocked a secret!");
});*/
const sections=document.querySelectorAll("section");
sections.forEach((section)=>{
    section.addEventListener("mouseover",()=>{
        section.style.borderColor="gold";
        section.style.boxShadow="0 0 15px gold";
    });
    section.addEventListener("mouseout",()=>{
        section.style.borderColor="transparent";
        section.style.boxShadow="0 4px 10px rgba(0,0,0,0.15)";
    });
});
const images=document.querySelectorAll("section img");
images.forEach((img)=>{
    img.addEventListener("click",()=>{
        const text=document.createElement("p");
        text.innerText="You clicked an image! Great Choice!";
        text.style.color="#333";
        text.style.fontWeight="bold";
        text.style.marginTop="10px";
        img.parentNode.appendChild(text);
        setTimeout(()=>{
            text.remove();
        },3000);
    });
});
window.addEventListener("scroll",()=>{
    const header=document.querySelector("header");
    const scrollPosition=window.scrollY;
    header.style.backgroundPositionY=`${scrollPosition*0.5}px`;
});