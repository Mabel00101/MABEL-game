const canvas=document.getElementById("scratch");

const ctx=canvas.getContext("2d");


let drawing=false;


let result=getFortune();



document.getElementById("result").innerHTML=

`
<h2>${result.icon} ${result.title}</h2>

<p>${result.reward}</p>

<h3>${result.level}</h3>

<p>${result.desc}</p>

`;




// 初始化银膜

function initScratch(){


ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



let g=ctx.createLinearGradient(
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
"bold 30px Microsoft YaHei";


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


let rect=
canvas.getBoundingClientRect();



let x=
e.clientX-rect.left;


let y=
e.clientY-rect.top;



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

checkWin();

}
);



canvas.addEventListener(
"mousemove",
(e)=>{


if(drawing)

erase(e);


}

);





function checkWin(){


showPopup();


}




function showPopup(){


let box=
document.getElementById("popup");


document.getElementById("popupText").innerHTML=

`
${result.icon}

${result.title}

<br>

${result.reward}

<br>

${result.level}

`;



box.style.display="flex";


setTimeout(()=>{


box.style.display="none";


},3000);



}
