const canvas=document.getElementById("scratch");
const ctx=canvas.getContext("2d");


let drawing=false;

let finished=false;


// 获取随机结果

let fortune=getFortune();



document.getElementById("prize").innerHTML=
fortune.title;


document.getElementById("desc").innerHTML=
fortune.desc;



// 初始化银膜

function initScratch(){


ctx.globalCompositeOperation="source-over";


let g=ctx.createLinearGradient(
0,
0,
420,
240
);


g.addColorStop(0,"#eeeeee");
g.addColorStop(0.5,"#999");
g.addColorStop(1,"#eeeeee");


ctx.fillStyle=g;

ctx.fillRect(
0,
0,
420,
240
);



ctx.fillStyle="#666";

ctx.font="bold 32px Microsoft YaHei";

ctx.textAlign="center";


ctx.fillText(
"刮开此处",
210,
130
);



}



initScratch();





function erase(e){


if(finished)return;


let rect=canvas.getBoundingClientRect();


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
28,
0,
Math.PI*2
);


ctx.fill();



check();



}





function check(){


let img=
ctx.getImageData(
0,
0,
canvas.width,
canvas.height
);



let clear=0;



for(let i=3;i<img.data.length;i+=4){

if(img.data[i]<10){

clear++;

}

}



if(clear>
canvas.width*canvas.height*0.45){


finished=true;


canvas.style.opacity=0;


showAnimation();


}



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

if(drawing)
erase(e);


}
);






canvas.addEventListener(
"touchstart",
()=>{
drawing=true;
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


if(drawing)
erase(e);



},
{
passive:false
}
);







// 中奖动画


function showAnimation(){


let box=document.getElementById("result");


box.classList.add("win");



for(let i=0;i<30;i++){


let star=document.createElement("span");


star.innerHTML="✨";


star.className="star";


star.style.left=
Math.random()*100+"%";


star.style.top=
Math.random()*100+"%";


box.appendChild(star);



setTimeout(()=>{

star.remove();

},2000);


}



}
