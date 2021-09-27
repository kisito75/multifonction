var canvas = document.getElementById("seck");
var text = canvas.getContext("2d");

var width = window.innerWidth;
var height = window.innerWidth;
canvas.width= width;
canvas.height= height;

text.fillstyle="green";
text.fillRect(600,30,150,150);

var y=30;
function haut(){
    y=y+2;
    text.fillRect(600,y,150,150);
}
    function coul(){
        text.fillstyle="green ";
        text.fillRect(600,y,150,150);

    }
    function couli(){
        text.fillstyle = "green";
        text.fillRect(600,y,150,150);
    }
    function disp(){
        text.clearRect(0,0,canvas.width,canvas.height);
    }
    function reap(){
        text.fillRect(600,y,150,150);
    }
