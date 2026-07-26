const canvas = document.getElementById("scratch");
const ctx = canvas.getContext("2d");

let isDrawing = false;


// 彩票刮层
function initScratch(){

    canvas.width = 420;
    canvas.height = 240;


    // 银色刮层
    let gradient = ctx.createLinearGradient(0,0,420,240);

    gradient.addColorStop(0,"#eeeeee");
    gradient.addColorStop(0.5,"#bbbbbb");
    gradient.addColorStop(1,"#f5f5f5");


    ctx.fillStyle = gradient;
    ctx.fillRect(0,0,420,240);



    // 刮刮乐文字

    ctx.fillStyle="#b8860b";
    ctx.font="bold 28px serif";
    ctx.fillText(
        "幸运刮刮乐",
        120,
        70
    );


    ctx.font="20px serif";
    ctx.fillText(
        "刮开查看今日天机",
        100,
        130
    );


    ctx.strokeStyle="#d4af37";
    ctx.lineWidth=6;
    ctx.strokeRect(
        8,
        8,
        404,
        224
    );


}



initScratch();


// 鼠标开始
canvas.addEventListener(
"mousedown",
()=>{
    isDrawing=true;
});


// 鼠标结束
canvas.addEventListener(
"mouseup",
()=>{
    isDrawing=false;
});


// 移动刮除
canvas.addEventListener(
"mousemove",
scratch
);


// 手机触摸

canvas.addEventListener(
"touchmove",
(e)=>{

    e.preventDefault();

    let touch=e.touches[0];

    let rect=canvas.getBoundingClientRect();

    erase(
        touch.clientX-rect.left,
        touch.clientY-rect.top
    );

},
{passive:false}
);



function scratch(e){

    if(!isDrawing)return;


    let rect=canvas.getBoundingClientRect();


    erase(
        e.clientX-rect.left,
        e.clientY-rect.top
    );

}



function erase(x,y){

    ctx.globalCompositeOperation="destination-out";


    ctx.beginPath();

    ctx.arc(
        x,
        y,
        25,
        0,
        Math.PI*2
    );

    ctx.fill();


    ctx.globalCompositeOperation="source-over";

}
