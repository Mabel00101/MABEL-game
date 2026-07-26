const canvas=document.getElementById("card");
const ctx=canvas.getContext("2d");

canvas.width=420;
canvas.height=240;


// 彩票底图
ctx.fillStyle="#c9152b";
ctx.fillRect(0,0,420,240);

ctx.strokeStyle="#ffd700";
ctx.lineWidth=8;
ctx.strokeRect(5,5,410,230);


// 标题
ctx.fillStyle="#ffd700";
ctx.font="bold 32px serif";
ctx.fillText("吉祥如意",110,60);


// 图案
for(let i=0;i<5;i++){
 for(let j=0;j<2;j++){

 ctx.beginPath();
 ctx.arc(
 90+i*60,
 110+j*60,
 22,
 0,
 Math.PI*2
 );

 ctx.fillStyle="#ffd700";
 ctx.fill();

 ctx.fillStyle="#c9152b";
 ctx.font="20px serif";
 ctx.fillText("福",
 82+i*60,
 118+j*60
 );

 }
}


// 银色覆盖层
ctx.fillStyle="#aaa";
ctx.fillRect(0,0,420,240);


let drawing=false;


function clearScratch(e){

 if(!drawing)return;

 let rect=canvas.getBoundingClientRect();

 let x=e.clientX-rect.left;
 let y=e.clientY-rect.top;


 ctx.globalCompositeOperation="destination-out";

 ctx.beginPath();

 ctx.arc(
 x,y,
 25,
 0,
 Math.PI*2
 );

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
clearScratch
);
