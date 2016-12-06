var divs = document.getElementsByClassName('alert');
for(var i=0; i<divs.length; i++) {
  divs[i].addEventListener("click", highlightThis);
  /*
  divs[i].addEventListener("click", highlightThis, true);
  divs[i].addEventListener("click", highlightThis, false);*/
}

function highlightThis(event) {
    //event.stopPropagation();
  
    var backgroundColor = this.style.backgroundColor;
    this.style.backgroundColor='yellow';
    alert(this.className);
    this.style.backgroundColor=backgroundColor;
}
var str = 0;
var dex = 0;
var con = 0;
var intt = 0;
var wis = 0;
var cha = 0;

function statRoll(){

    str = (Math.floor((Math.random()*33)+3));
    dex = (Math.floor((Math.random()*33)+3));
    con = (Math.floor((Math.random()*33)+3));
    intt = (Math.floor((Math.random()*33)+3));
    wis = (Math.floor((Math.random()*33)+3));
    cha = (Math.floor((Math.random()*33)+3));

    document.getElementById("Str").value= str;
    document.getElementById("Dex").value= dex;
    document.getElementById("Con").value= con;
    document.getElementById("Int").value= intt;
    document.getElementById("Wis").value= wis;
    document.getElementById("Cha").value= cha;
}
function StrIncrease(){

    str++;
    document.getElementById("Str").value= str;
}
function StrDecrease(){

    str--;
    document.getElementById("Str").value= str;
}
function DexIncrease(){

    dex++;
    document.getElementById("Dex").value= dex;
}
function DexDecrease(){

    dex--;
    document.getElementById("Dex").value= dex;
}
function ConIncrease(){

    con++;
    document.getElementById("Con").value= con;
}
function ConDecrease(){

    con--;
    document.getElementById("Con").value= con;
}
function IntIncrease(){

    intt++;
    document.getElementById("Int").value= intt;
}
function IntDecrease(){

    intt--;
    document.getElementById("Int").value= intt;
}
function WisIncrease(){

    wis++;
    document.getElementById("Wis").value= wis;
}
function WisDecrease(){

    wis--;
    document.getElementById("Wis").value= wis;
}
function ChaIncrease(){

    cha++;
    document.getElementById("Cha").value= cha;
}
function ChaDecrease(){

    cha--;
    document.getElementById("Cha").value= cha;
}


