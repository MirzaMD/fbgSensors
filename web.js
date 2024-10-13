const bmi=document.querySelectorAll(".bmi")
const results=document.getElementById("results");
const weightStatus=document.getElementById("weightStatus");
const heightStatus=document.getElementById("heightStatus");
const head=document.querySelector("header");

const conclusion=document.getElementById("conclusion");

function poundstoKg(weight){
    return weight*0.453592
}
function feetToMeters(height,inches){
    return (height+inches/12)*0.3048
}
function calculateBMI(height,weight){
         return weight/(height*height)
}
results.addEventListener("mousedown",()=>{
    let weight,height;
    const inches=bmi[0].value.slice(2)
    if(weightStatus.options[weightStatus.selectedIndex].text=="Pounds") weight=poundstoKg(Number(bmi[1].value))
    else Number(weight=bmi[1].value)
    
    if(heightStatus.options[heightStatus.selectedIndex].text=="Feet") height=feetToMeters(Math.trunc(bmi[0].value),inches)
    else Number(height=bmi[0].value)    
     
    let res=calculateBMI(height,weight);

    if(res<18.5){
        conclusion.textContent=`Your BMI is ${res.toFixed(2)}%`
        document.body.style.backgroundColor=`rgba(132, 132, 236, 0.854)`;
        head.style.backgroundColor=`rgba(132, 132, 236, 0.854)`;
        head.style.transition=`1.05s ease-in`;
        document.body.style.transition=`1.05s ease-in`;
    }
    else if(res>25 && res<29.99){
        conclusion.textContent=`YOUR BMI IS ${res.toFixed(2)}%`
       document.body.style.backgroundColor=`rgba(230, 105, 29, 0.858)`;
       head.style.backgroundColor=`rgba(230, 105, 29, 0.858)`;
       head.style.transition=`1.05s ease-in`;
       document.body.style.transition=`1.05s ease-in`;
    }
    else if (res>29.99){
        conclusion.textContent=`YOUR BMI IS ${res.toFixed(2)}%`
        document.body.style.backgroundColor=` rgba(218, 37, 37, 0.648)`;
        head.style.backgroundColor=`rgba(218, 37, 37, 0.648)`;
        head.style.transition=`1.05s ease-in`;
        document.body.style.transition=`1.05s ease-in`;
    }
    else{
        conclusion.textContent=`YOUR BMI IS ${res.toFixed(2)}%`
        document.body.style.backgroundColor=`rgba(157, 241, 157, 0.749)`;
        head.style.backgroundColor=`rgba(157, 241, 157, 0.749)`;
        head.style.transition=`1.05s ease-in`;
        document.body.style.transition=`1.05s ease-in`;
    }
    console.log(inches)// this displays 9 
})
