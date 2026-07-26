const canvas =
document.getElementById("scratch");


const ctx =
canvas.getContext("2d");



let drawing=false;



let result=getFortune();



//显示中奖信息

document.getElementById(
"fortuneTitle"
).innerHTML=
result.icon+" "+result.title;


document.getElementById(
"fortuneLevel"
).innerHTML=
result.level;


document.getElementById(
"fortuneReward"
).innerHTML=
"🎁 "+result.reward;


document.getElementById(
"fortuneDesc"
).innerHTML=
result.desc;





function initScratch(){


ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



let g=
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



initScratch();





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
25,
0,
Math.PI*2
);



ctx.fill();



ctx.globalCompositeOperation=
"source-over";



}





canvas.addEventListener(
"mousedown",
(e)=>{

drawing=true;

erase(e);

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



window.addEventListener(
"mouseup",
()=>{

drawing=false;


}
);






canvas.addEventListener(
"touchstart",
(e)=>{

drawing=true;

erase(e);


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



canvas.addEventListener(
"touchend",
()=>{


drawing=false;


}
);
