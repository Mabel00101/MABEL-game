const canvas = document.getElementById("scratch");
const ctx = canvas.getContext("2d");

canvas.width = 420;
canvas.height = 240;


let drawing = false;
let finished = false;


// 获取随机结果
let result = getFortune();


// 初始化
function initScratch(){


    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    // 显示中奖内容
    ctx.globalCompositeOperation="source-over";


    ctx.fillStyle="#8b1e1e";

    ctx.fillRect(
        0,
        0,
        420,
        240
    );


    ctx.fillStyle="#ffd86b";

    ctx.textAlign="center";


    ctx.font="bold 32px Microsoft YaHei";

    ctx.fillText(
        result.title,
        210,
        80
    );


    ctx.font="24px Microsoft YaHei";

    ctx.fillText(
        result.icon+" "+result.reward,
        210,
        130
    );


    ctx.font="20px Microsoft YaHei";

    ctx.fillText(
        result.desc,
        210,
        175
    );



    // 重新盖刮层

    ctx.globalCompositeOperation="source-over";


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



    ctx.fillStyle="#777";


    ctx.font="bold 30px Microsoft YaHei";


    ctx.fillText(
        "刮开此处",
        210,
        130
    );

}



// 擦除

function erase(e){


    if(finished)return;


    let rect=
    canvas.getBoundingClientRect();


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
        30,
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

if(drawing)
erase(e);

});



window.addEventListener(
"mouseup",
function(){

drawing=false;

});




// 手机

canvas.addEventListener(
"touchstart",
function(e){

drawing=true;

erase(e);

});



canvas.addEventListener(
"touchmove",
function(e){

e.preventDefault();

if(drawing)
erase(e);


},
{
passive:false
});



window.addEventListener(
"touchend",
function(){

drawing=false;

});





// 刮开完成检测

function checkScratch(){


let pixels=
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

if(pixels[i]==0)
clear++;

}



if(
clear>420*240*0.45
&& !finished
){


finished=true;


// 中奖动画

canvas.style.animation=
"win .8s";


setTimeout(
function(){

alert(
"🎉 恭喜："+result.title+
"\n"+result.reward
);


},
500
);


}


}



setInterval(
checkScratch,
500
);



initScratch();
