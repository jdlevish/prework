document.getElementById("button1").addEventListener("click",function(){
    document.getElementById("box").style.height = "500px";
});
document.getElementById("button2").addEventListener("click", function(){
    document.getElementById("box").style.backgroundColor = "blue";
});
document.getElementById("button3").addEventListener("click", function(){
    document.getElementById("box").style.opacity = ".2";
});
document.getElementById("button4").addEventListener("click", function(){
    document.getElementById("box").style = "height:150px; width:150px; background-color:orange; margin:25px" ;
});
document.getElementById("button5").addEventListener("click", function(){
    document.getElementById("box").style.boxShadow = "10px 10px gray"  ;
});
document.getElementById("button6").addEventListener("click", function(){
    document.getElementById("box").style = "height:600px; width:600px; background-color:#fac97a; margin:25px"  ;
});