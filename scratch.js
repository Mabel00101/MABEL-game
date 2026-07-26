// ===============================
// 国风天机刮刮乐 scratch.js
// ===============================


let canvas;
let ctx;


let result;



// ===============================
// 随机卦象数据
// ===============================


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





// ===============================
// 页面加载完成后启动
// ===============================


window.onload=function(){


console.log("刮刮乐启动");


canvas =
document.getElementById("scratch");



if(!canvas){

console.error(
"找不到 scratch canvas"
);

return;

}



ctx =
canvas.getContext("2d");



canvas.width=420;
canvas.height=240;



// 随机结果

result =
results[
Math.floor(
Math.random()*results.length
)
];



// 显示结果

showResult();



// 创建银膜

initScratch();


};







// ===============================
// 显示中奖内容
// ===============================


function showResult(){


document.getElementById("icon")
.innerHTML=result.icon;


document.getElementById("title")
.innerHTML=result.title;


document.getElementById("reward")
.innerHTML=
result.level+
" · "+
result.reward;


document.getElementById("desc")
.innerHTML=result.desc;


}







// ===============================
// 创建银色刮层
// ===============================


function initScratch(){


ctx.globalCompositeOperation="source-over";



ctx.clearRect(
0,
0,
420,
240
);



// 银膜渐变

let gradient =
ctx.createLinearGradient(
0,
0,
420,
240
);



gradient.addColorStop(
0,
"#eeeeee"
);


gradient.addColorStop(
0.45,
"#999999"
);


gradient.addColorStop(
1,
"#f8f8f8"
);



ctx.fillStyle=gradient;


ctx.fillRect(
0,
0,
420,
240
);



// 文字


ctx.fillStyle="#555";


ctx.font=
"bold 32px Microsoft YaHei";


ctx.textAlign="center";


ctx.fillText(
"刮开此处",
210,
120
);



ctx.font=
"18px Microsoft YaHei";


ctx.fillText(
"揭晓今日天机",
210,
160
);



}







// ===============================
// 刮开功能
// ===============================


let drawing=false;

let finished=false;




function erase(e){


if(finished)
return;



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


}
else{


x=
e.clientX-
rect.left;


y=
e.clientY-
rect.top;


}



// 清除银膜

ctx.globalCompositeOperation=
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



ctx.globalCompositeOperation=
"source-over";



}







// ===============================
// 鼠标事件
// ===============================


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








// ===============================
// 手机事件
// ===============================


canvas.addEventListener(
"touchstart",
function(e){

drawing=true;

erase(e);

},
{
passive:false
});




canvas.addEventListener(
"touchmove",
function(e){

e.preventDefault();


if(drawing){

erase(e);

}


},
{
passive:false
});




window.addEventListener(
"touchend",
function(){

drawing=false;

checkScratch();

});








// ===============================
// 判断刮开比例
// ===============================


function checkScratch(){


if(finished)
return;



let pixels =
ctx.getImageData(
0,
0,
420,
240
).data;



let clear=0;



for(
let i=3;
i<pixels.length;
i+=4
){


if(pixels[i]===0){

clear++;

}


}



let percent =
clear/(420*240);



console.log(
"刮开比例:",
Math.round(percent*100)+"%"
);



if(percent>0.45){


finished=true;



canvas.style.transition=
"opacity 1s";



canvas.style.opacity="0";



document
.querySelector(".scratch-card")
.classList.add("win");



showPopup();



}



}








// ===============================
// 中奖动画
// ===============================


function showPopup(){



let popup =
document.getElementById("popup");



let text =
document.getElementById("popup-text");



if(!popup||!text)
return;



text.innerHTML=

`
${result.icon}
<br>
${result.title}
<br>
${result.level}
<br>
${result.reward}
<br>
${result.desc}
`;



popup.style.display="flex";



setTimeout(()=>{


popup.style.display="none";


},3000);



}
