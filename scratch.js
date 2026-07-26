const canvas = document.getElementById("scratch");
const ctx = canvas.getContext("2d");

canvas.width = 420;
canvas.height = 240;


let drawing = false;


// 随机结果
const results = [

{
title:"乾卦 · 飞龙在天",
reward:"一等奖 ¥888",
desc:"事业腾飞，贵人相助",
level:"gold"
},

{
title:"坤卦 · 厚德载物",
reward:"二等奖 ¥288",
desc:"积累福气，稳步前行",
level:"silver"
},

{
title:"离卦 · 光明未来",
reward:"幸运奖 ¥88",
desc:"前方有好运",
level:"blue"
},

{
title:"无奖",
reward:"再接再厉",
desc:"下次好运降临",
level:"none"
}

];


let result =
results[Math.floor(Math.random()*results.length)];


// 初始化刮层

function initScratch(){

ctx.clearRect(0,0,420,240);


// 背后中奖内容

ctx.fillStyle="#5b0b0b";
ctx.fillRect(0,0,420,240);


ctx.fillStyle="#ffd76a";
ctx.textAlign="center";


ctx.font="bold 26px Microsoft YaHei";

ctx.fillText(
result.title,
210,
80
);


ctx.font="20px Microsoft YaHei";

ctx.fillText(
result.reward,
210,
125
);


ctx.font="18px Microsoft YaHei";

ctx.fillText(
result.desc,
210,
165
);


// 银色覆盖层

let g=ctx.createLinearGradient(
0,
0,
420,
240
);


g.addColorStop(0,"#eeeeee");
g.addColorStop(.5,"#aaa");
g.addColorStop(1,"#eee");


ctx.fillStyle=g;

ctx.fillRect(
0,
0,
420,
240
);


// 提示文字

ctx.fillStyle="#666";

ctx.font="bold 28px Microsoft YaHei";

ctx.fillText(
"刮开此处",
210,
130
);


}




// 擦除

function erase(e){

let rect=
canvas.getBoundingClientRect();


let x;
let y;


if(e.touches){

x=e.touches[0].clientX-rect.left;

y=e.touches[0].clientY-rect.top;

}

else{

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

canvas.addEventListener(
"mousedown",
e=>{
drawing=true;
erase(e);
}
);


canvas.addEventListener(
"mousemove",
e=>{

if(drawing)
erase(e);

}
);


canvas.addEventListener(
"mouseup",
()=>{
drawing=false;

showResult();

}
);



// 手机

canvas.addEventListener(
"touchstart",
e=>{
drawing=true;
erase(e);
}
);


canvas.addEventListener(
"touchmove",
e=>{

e.preventDefault();

if(drawing)
erase(e);

},
{passive:false}
);



canvas.addEventListener(
"touchend",
()=>{

drawing=false;

showResult();

}

);



// 中奖动画

function showResult(){

let box=document.querySelector(".card");


if(!box)return;


box.classList.add("win");


setTimeout(()=>{

alert(
result.title+
"\n"+
result.reward+
"\n"+
result.desc
);


},600);


}



// 启动

initScratch();
