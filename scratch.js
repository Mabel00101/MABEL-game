const canvas = document.getElementById("scratch");
const ctx = canvas.getContext("2d");


canvas.width = 420;
canvas.height = 240;



// =========================
// 随机卦象结果
// =========================

const results = [

{
icon:"🐉",
title:"乾卦 · 飞龙在天",
reward:"888积分",
desc:"事业腾飞，贵人相助",
level:"上上签"
},


{
icon:"🔥",
title:"火天大有",
reward:"666积分",
desc:"财运旺盛，收获满满",
level:"上上签"
},


{
icon:"🌿",
title:"坤卦 · 厚德载物",
reward:"388积分",
desc:"积累福气，稳步前行",
level:"上签"
},


{
icon:"⚡",
title:"雷风恒",
reward:"188积分",
desc:"坚持之后必有收获",
level:"中签"
},


{
icon:"🌊",
title:"水山蹇",
reward:"88积分",
desc:"先难后易，静待时机",
level:"小吉"
}

];



// 随机抽取

let result =
results[
Math.floor(
Math.random()*results.length
)
];




// =========================
// 显示隐藏结果
// =========================

function showResult(){


document.getElementById("icon")
.innerHTML=result.icon;


document.getElementById("title")
.innerHTML=result.title;


document.getElementById("reward")
.innerHTML=
result.level+" · "+result.reward;


document.getElementById("desc")
.innerHTML=result.desc;


}





// =========================
// 创建银色刮层
// =========================

function initScratch(){


ctx.clearRect(
0,
0,
420,
240
);



// 背景银膜

let gradient =
ctx.createLinearGradient(
0,
0,
420,
240
);


gradient.addColorStop(
0,
"#f5f5f5"
);


gradient.addColorStop(
0.5,
"#999999"
);


gradient.addColorStop(
1,
"#eeeeee"
);



ctx.fillStyle=gradient;


ctx.fillRect(
0,
0,
420,
240
);



// 彩票文字

ctx.fillStyle="#666";


ctx.font=
"bold 30px Microsoft YaHei";


ctx.textAlign="center";


ctx.fillText(
"刮开此处",
210,
125
);



ctx.font=
"18px Microsoft YaHei";


ctx.fillText(
"好运正在生成",
210,
160
);


}




// =========================
// 刮开逻辑
// =========================

let drawing=false;

let finished=false;



function erase(e){


if(finished)return;



let rect =
canvas.getBoundingClientRect();



let x;
let y;



if(e.touches){


x=
e.touches[0].clientX-
rect.left;


y=
e.touches[0].clientY-
rect.top;


}else{


x=
e.clientX-
rect.left;


y=
e.clientY-
rect.top;


}



ctx.globalCompositeOperation=
"destination-out";



ctx.beginPath();


ctx.arc(
x,
y,
28,
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
function(e){

drawing=true;

erase(e);

});


canvas.addEventListener(
"mousemove",
function(e){

if(drawing){

erase(e);

}

});


window.addEventListener(
"mouseup",
function(){

drawing=false;

checkScratch();

});





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


if(drawing){

erase(e);

}

},
{passive:false}
);



window.addEventListener(
"touchend",
function(){

drawing=false;

checkScratch();

});






// =========================
// 检测刮开比例
// =========================


function checkScratch(){


if(finished)return;



let data =
ctx.getImageData(
0,
0,
420,
240
).data;



let clear=0;



for(
let i=3;
i<data.length;
i+=4
){

if(data[i]===0){

clear++;

}

}



let percent =
clear/(420*240);



if(percent>0.45){


finished=true;


canvas.style.transition="1s";

canvas.style.opacity="0";



// 动画

document
.querySelector(".scratch-card")
.classList.add("win");



showPopup();


}



}




// =========================
// 中奖弹窗
// =========================


function showPopup(){


document
.getElementById("popup-text")
.innerHTML=

`
${result.icon}
<br>
${result.title}
<br>
${result.reward}
<br>
${result.desc}
`;



document
.getElementById("popup")
.style.display="flex";



setTimeout(()=>{


document
.getElementById("popup")
.style.display="none";


},3000);



}



// 启动

showResult();

initScratch();
