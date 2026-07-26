const canvas = document.getElementById("scratch");
const ctx = canvas.getContext("2d");

canvas.width = 420;
canvas.height = 240;


// 奖励池
const prizes = [

{
title:"乾卦·飞龙在天",
level:"一等奖",
reward:"888积分",
desc:"事业腾飞，贵人相助",
icon:"🐉"
},

{
title:"坤卦·厚德载物",
level:"二等奖",
reward:"666积分",
desc:"稳中有升，福气满满",
icon:"🌿"
},

{
title:"离卦·光明未来",
level:"三等奖",
reward:"388积分",
desc:"前路明亮，好运相随",
icon:"🔥"
},

{
title:"震卦·雷动乾坤",
level:"幸运奖",
reward:"188积分",
desc:"突破阻碍，迎来机会",
icon:"⚡"
},

{
title:"随机卦象",
level:"参与奖",
reward:"88积分",
desc:"平安喜乐",
icon:"✨"
}

];


// 随机结果
let prize =
prizes[Math.floor(Math.random()*prizes.length)];



// 显示中奖内容
function showPrize(){

document.querySelector(".reward h2").innerHTML =
prize.icon+" "+prize.title;


document.querySelector(".reward p").innerHTML =
prize.level+" · "+prize.reward;


document.querySelector(".reward h3").innerHTML =
prize.desc;


}



// 初始化刮刮层

function initScratch(){


ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);


// 银色渐变

let g =
ctx.createLinearGradient(
0,
0,
420,
240
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



// 文字

ctx.fillStyle="#666";

ctx.font=
"bold 28px Microsoft YaHei";

ctx.textAlign="center";


ctx.fillText(
"刮开此处",
210,
130
);



}



// 刮开

let drawing=false;



function erase(e){


let rect =
canvas.getBoundingClientRect();


let x;
let y;



if(e.touches){

x=
e.touches[0].clientX
-
rect.left;


y=
e.touches[0].clientY
-
rect.top;


}else{


x=
e.clientX
-
rect.left;


y=
e.clientY
-
rect.top;


}



ctx.globalCompositeOperation =
"destination-out";



ctx.beginPath();


ctx.arc(
x,
y,
30,
0,
Math.PI*2
);


ctx.fill();



ctx.globalCompositeOperation =
"source-over";


}



// 鼠标

canvas.addEventListener(
"mousedown",
function(e){

drawing=true;

erase(e);

}
);



canvas.addEventListener(
"mousemove",
function(e){

if(drawing)
erase(e);

}
);



window.addEventListener(
"mouseup",
function(){

drawing=false;


}
);



// 手机

canvas.addEventListener(
"touchstart",
function(e){

drawing=true;

erase(e);


},
{passive:false}

);



canvas.addEventListener(
"touchmove",
function(e){


e.preventDefault();


if(drawing)
erase(e);



},
{passive:false}

);



window.addEventListener(
"touchend",
function(){

drawing=false;


}
);




// 初始化

showPrize();

initScratch();



// 刮开后动画检测

let check =
setInterval(()=>{


let img =
ctx.getImageData(
0,
0,
420,
240
);



let clear=0;



for(let i=3;i<img.data.length;i+=4){

if(img.data[i]==0)
clear++;

}



if(clear>420*240*0.45){


clearInterval(check);


canvas.style.display="none";


// 中奖动画

document.querySelector(".card")
.classList.add("win");


}


},500);
