const navs=document.querySelectorAll("nav");
const wrap=document.querySelector("main");
const book=document.querySelectorAll(".book");
navs.forEach((nav,index)=>{
    nav.addEventListener("click",()=>{
        wrap.style.transform=`translateX(-${1500*index}px)`;
        wrap.style.transition=`1.35s`
    })
})
book.forEach(b=>{
    b.addEventListener("click",()=>{
        window.alert("Doctor's busy at the moment , try again subsequently")
    })
})