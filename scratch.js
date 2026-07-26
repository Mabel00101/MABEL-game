const canvas = document.getElementById("scratch");
const ctx = canvas.getContext("2d");


canvas.width = 420;
canvas.height = 240;



// =======================
// 随机卦象库
// =======================


const fortunes = [

{
gua:"乾为天",
level:"上上签",
reward:"888积分",
desc:"龙腾九天，事业腾飞",
icon:"🐉"
},


{
gua:"火天大有",
level:"上上签",
reward:"666积分",
desc:"大富大贵，财运旺盛",
icon:"🔥"
},


{
gua:"地天泰",
level:"上签",
reward:"500积分",
desc:"天地交泰，万事顺遂",
icon:"🌏"
},


{
gua:"风雷益",
level:"上签",
reward:"300积分",
desc:"贵人相助，好事将临",
icon:"🌈"
},


{
gua:"水山蹇",
level:"中签",
reward:"100积分",
desc:"稳中求进，等待时机",
icon:"🌊"
},


{
gua:"山水蒙",
level:"小吉",
reward:"50积分",
desc:"勤学积累，未来可期",
icon:"📚"
}


];



// 随机结果

let result =
fortunes[
Math.floor(
Math.random()*fortunes.length
)
];




// =======================
// 写入奖品
// =======================


function showReward(){


let box=document.querySelector(".reward");


if(box){


box.innerHTML=`

<h2>
${result.icon}
${result.gua}
</h2>


<p>
${result.desc}
</p>


<h3>
${result.level}
· ${result.reward}
</h3>

`;


}



}



// =======================
// 初始化刮层
// =======================


function initScratch(){


ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



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
"#aaaaaa"
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



// 提示文字


ctx.fillStyle="#666";


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



// =======================
// 刮奖逻辑
// =======================


let drawing=false;


let area=0;



function erase(e){


let rect=
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



}

else{


x=
e.clientX
-
rect.left;


y=
e.clientY
-
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




// 计算刮开比例

area++;



if(area>35){


finishScratch();


}



}




function finishScratch(){



canvas.style.pointerEvents="none";



// 显示结果

showReward();



// 添加动画


let card=
document.querySelector(".card");


if(card){

card.classList.add("win");

}



// 金币

createGold();


}




canvas.addEventListener(
"mousedown",
()=>{

drawing=true;

}
);



canvas.addEventListener(
"mouseup",
()=>{

drawing=false;

}
);



canvas.addEventListener(
"mousemove",
(e)=>{


if(drawing){

erase(e);

}


}
);



// 手机

canvas.addEventListener(
"touchstart",
(e)=>{

drawing=true;

erase(e);

}

);



canvas.addEventListener(
"touchend",
()=>{

drawing=false;

}

);



canvas.addEventListener(
"touchmove",
(e)=>{


e.preventDefault();


if(drawing){

erase(e);

}


},
{
passive:false
}

);





// =======================
// 中奖金币动画
// =======================


function createGold(){



for(let i=0;i<30;i++){


let gold=
document.createElement("div");


gold.className="gold";


gold.innerHTML="🪙";


gold.style.left=
Math.random()*100+"vw";


gold.style.top=
"-30px";


gold.style.animationDelay=
Math.random()+"s";



document.body.appendChild(gold);



setTimeout(()=>{


gold.remove();


},2000);



}



}
