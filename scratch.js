const canvas = document.getElementById("scratch");
const ctx = canvas.getContext("2d");

canvas.width = 420;
canvas.height = 240;

let drawing = false;


// 初始化银膜
function initScratch(){

    let gradient = ctx.createLinearGradient(0,0,420,240);

    gradient.addColorStop(0,"#f5f5f5");
    gradient.addColorStop(0.5,"#999");
    gradient.addColorStop(1,"#eee");

    ctx.fillStyle = gradient;
    ctx.fillRect(0,0,420,240);


    ctx.fillStyle="#666";
    ctx.font="bold 28px Microsoft YaHei";
    ctx.textAlign="center";

    ctx.fillText(
        "刮开此处",
        210,
        130
    );
}


// 获取鼠标位置
function getPosition(e){

    let rect = canvas.getBoundingClientRect();

    return {
        x:e.clientX - rect.left,
        y:e.clientY - rect.top
    };

}


// 擦除
function erase(e){

    let pos=getPosition(e);


    ctx.globalCompositeOperation="destination-out";


    ctx.beginPath();

    ctx.arc(
        pos.x,
        pos.y,
        25,
        0,
        Math.PI*2
    );

    ctx.fill();


    ctx.globalCompositeOperation="source-over";
}



// 鼠标按下
canvas.addEventListener(
"mousedown",
function(e){

    drawing=true;
    erase(e);

});


// 移动
canvas.addEventListener(
"mousemove",
function(e){

    if(drawing){

        erase(e);

    }

});


// 松开
window.addEventListener(
"mouseup",
function(){

    drawing=false;

});



initScratch();
