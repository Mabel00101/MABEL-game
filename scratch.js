const canvas=document.getElementById("scratch");

const ctx=canvas.getContext("2d");

let drawing=false;


// 获取随机结果

let result=getFortune();



document.getElementById("title").innerHTML=
result.icon+" "+result.title;


document.getElementById("reward").innerHTML=
result.level+" · "+result.reward;


document.getElementById("desc").innerHTML=
result.desc;



// 初始化银膜

function initScratch(){


ctx.clearRect(0,0,420,240);



let g=ctx.createLinearGradient(
0,0,420,240
);


g.addColorStop(
0,
"#eeeeee"
);


g.addColorStop(
0.5,
"#999999"
);


g.addColorStop(
1,
"#eeeeee"
);



ctx.fillStyle=g;

ctx.fillRect(
0,
0,
420,
240
);



ctx.fillStyle="#777";

ctx.font=
"bold 30px Microsoft YaHei";


ctx.textAlign="center";


ctx.fillText(
"刮开此处",
210,
130
);



}


initScratch();



// 擦除


function erase(e){


let rect=
canvas.getBoundingClientRect();



let x;
let y;



if(e.touches){


x=e.touches[0].clientX-rect.left;

y=e.touches[0].clientY-rect.top;


}else{


x=e.clientX-rect.left;

y=e.clientY-rect.top;


}




ctx.globalCompositeOperation=
"destination-out";



ctx.beginPath();


ctx.arc(
x,
y,
25,
0,
Math.PI*2
);


ctx.fill();


ctx.globalCompositeOperation=
"source-over";

}



// 鼠标


canvas.onmousedown=function(e){

drawing=true;

erase(e);

}


canvas.onmousemove=function(e){

if(drawing){

erase(e);

}

}


canvas.onmouseup=function(){

drawing=false;

showWin();

}




// 手机


canvas.ontouchstart=function(e){

drawing=true;

erase(e);

}



canvas.ontouchmove=function(e){

e.preventDefault();

erase(e);


}



canvas.ontouchend=function(){

drawing=false;

showWin();

}



//中奖动画

function showWin(){


document.getElementById("wintext")
.innerHTML=

result.icon+
" "+
result.title+
"<br>"+
result.reward;



document.getElementById("win")
.style.display="flex";


}




function closeWin(){


document.getElementById("win")
.style.display="none";


}
