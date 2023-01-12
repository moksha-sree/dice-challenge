window.onload=dice();

function dice(){
    var p1=[];
var p2=[];
for (var i=1;i<=6;i++){
    p1.push("images/dice" + i + ".png");
    p2.push("images/dice" + i + ".png");
}
console.log(p1,p2);
var i1=Math.floor(Math.random()*6);
var i2=Math.floor(Math.random()*6);
document.getElementById('player1').setAttribute("src",p1[i1]);
document.getElementById('player2').setAttribute("src",p2[i2]);
if( i1>i2 ){
    document.getElementById("title").innerText="Player 1 wins !!" ;
}
else if( i2>i1 ){
    document.getElementById("title").innerText="Player 2 wins !!" ;
}
else{
    document.getElementById("title").innerText=" Draw !! ";
}
}