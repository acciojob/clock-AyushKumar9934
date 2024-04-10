//your JS code here. If required.
let ptag=document.getElementById("timer");

let current=new Date();
function fn(){
	ptag.innerHTML=current.toLocaleString();
}




setInterval(fn(),1000);