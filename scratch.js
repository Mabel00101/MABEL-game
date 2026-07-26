const canvas = document.getElementById("scratch");
const ctx = canvas.getContext("2d");

let drawing = false;


function initScratch(){

canvas.width = 420;
canvas.height = 240;


// 银色刮层
let gradient = ctx.createLinearGradient(0,0,420,240);
gradient.addColorStop(0,"#eeeeee");
gradient.addColorStop(0.5,"#bbbbbb");
gradient.addColorStop(1,"#eeeeee");

ctx.fillStyle = gradient;
ctx.fillRect(0,0,420,240);


// 中间文字
ctx.fillStyle="#666";
ctx.font="bold 32px Arial";
ctx.textAlign="center";
ctx.fillText(
"刮开查看好运",
210,
125
);


ctx.globalCompositeOperation="destination-out";

}


// 开始刮
function scratch(e){

if(!drawing)return;


let rect=canvas.getBoundingClientRect();

let x=e.clientX-rect.left;
let y=e.clientY-rect.top;


ctx.beginPath();
ctx.arc(x,y,25,0,Math.PI*2);
ctx.fill();

}



canvas.addEventListener(
"mousedown",
()=>drawing=true
);


canvas.addEventListener(
"mouseup",
()=>drawing=false
);


canvas.addEventListener(
"mousemove",
scratch
);


// 手机触摸
canvas.addEventListener(
"touchstart",
()=>{
drawing=true
}
);


canvas.addEventListener(
"touchend",
()=>{
drawing=false
}
);


canvas.addEventListener(
"touchmove",
(e)=>{

let touch=e.touches[0];

scratch({
clientX:touch.clientX,
clientY:touch.clientY
});

e.preventDefault();

},
{passive:false}
);



initScratch();
