const canvas=document.getElementById("scratch");
const ctx=canvas.getContext("2d");


let drawing=false;


// 随机结果

let result=getFortune();



document.querySelector("#reward h2").innerHTML=
result.icon+" "+result.title;


document.querySelector("#reward p").innerHTML=
result.reward;


document.querySelector("#reward h3").innerHTML=
result.desc;



// 初始化刮层

function initScratch(){


ctx.clearRect(0,0,420,240);


let g=ctx.createLinearGradient(
0,0,420,240
);


g.addColorStop(0,"#eeeeee");
g.addColorStop(0.5,"#999999");
g.addColorStop(1,"#eeeeee");


ctx.fillStyle=g;

ctx.fillRect(
0,
0,
420,
240
);



ctx.fillStyle="#666";

ctx.font="bold 28px Microsoft YaHei";

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


let rect=canvas.getBoundingClientRect();


let x=e.clientX-rect.left;

let y=e.clientY-rect.top;



ctx.globalCompositeOperation="destination-out";


ctx.beginPath();

ctx.arc(
x,
y,
28,
0,
Math.PI*2
);


ctx.fill();


ctx.globalCompositeOperation="source-over";


}


// 鼠标


canvas.onmousedown=function(e){

drawing=true;

erase(e);

};


canvas.onmouseup=function(){

drawing=false;


checkWin();

};



canvas.onmousemove=function(e){

if(drawing){

erase(e);

}

};



// 判断刮开

function checkWin(){


setTimeout(()=>{


document.querySelector(".reward")
.classList.add("show");


},500);


}
