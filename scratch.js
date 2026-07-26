const canvas = document.getElementById("scratch");
const ctx = canvas.getContext("2d");


const answer = document.getElementById("answer");


canvas.width = 420;
canvas.height = 240;


// =====================
// 初始化刮奖内容
// =====================

const results = [
    "🐉 乾卦 · 飞龙在天 · 上上签",
    "🔥 火天大有 · 上上签",
    "🌿 坤卦 · 厚德载物 · 上签",
    "⚡ 雷风恒 · 中签",
    "🌊 水山蹇 · 小吉"
];


let result =
results[Math.floor(Math.random()*results.length)];


answer.innerHTML = result;


// =====================
// 绘制银膜
// =====================

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
        .5,
        "#888888"
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


    ctx.font="bold 30px Microsoft YaHei";


    ctx.textAlign="center";


    ctx.fillText(
        "刮开此处",
        210,
        120
    );


}



// =====================
// 刮开
// =====================

let drawing=false;


function erase(e){


let rect =
canvas.getBoundingClientRect();



let x =
(e.clientX - rect.left)
*
canvas.width /
rect.width;



let y =
(e.clientY - rect.top)
*
canvas.height /
rect.height;



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
e=>{

drawing=true;

erase(e);

});


canvas.addEventListener(
"mousemove",
e=>{

if(drawing){

erase(e);

}

});



window.addEventListener(
"mouseup",
()=>{

drawing=false;

check();

});





canvas.addEventListener(
"touchstart",
e=>{

drawing=true;

erase(e.touches[0]);

},
{
passive:false
});



canvas.addEventListener(
"touchmove",
e=>{

e.preventDefault();


if(drawing){

erase(e.touches[0]);

}

},
{
passive:false
});



window.addEventListener(
"touchend",
()=>{

drawing=false;

check();

});





// =====================
// 判断刮开比例
// =====================

let opened=false;


function check(){


if(opened)
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

if(pixels[i]===0)
clear++;

}



let percent =
clear/(420*240);



if(percent>0.45){


opened=true;


canvas.style.transition=
"opacity .8s";


canvas.style.opacity="0";


setTimeout(()=>{


canvas.style.display="none";


},800);



}

}




initScratch();
