let div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");

var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Search";
button.addEventListener("click",faaa);

//for active cases
let active=document.createElement("div");
active.setAttribute("id","active");

//for recovered cases
let recovered =document.createElement("div");
recovered.setAttribute("id","recovered");

//for death cases
let death=document.createElement("div");
death.setAttribute("id","death");

div.append(input,button,active,recovered,death);
document.body.append(div);

async function faaa(){
  let countryname=document.getElementById("country").value;
  console.log(countryname);
  let url=`https://api.covid19api.com/dayone/country/${countryname}`;
  let res=await fetch(url);
  let res1=await res.json();
  console.log(res1);
  let index=res1.length-1;
  console.log(res1[index].Active);
  active.innerHTML=`Total Active Cases:${res1[index].Active}`;
  
  console.log(res1[index].Recovered);
  recovered.innerHTML=`Total Recovered Cases:${res1[index].Recovered}`;
  
  console.log(res1[index].Deaths);
  death.innerHTML=`Total Death Cases:${res1[index].Deaths}`;
  
}