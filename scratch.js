const canvas = document.getElementById("scratch");
const ctx = canvas.getContext("2d");

canvas.width = 420;
canvas.height = 240;

let drawing = false;

// 初始化刮层
function initScratch(){

    ctx.clearRect(0,0,420,240);

    // 银色刮层
    let g = ctx.createLinearGradient(0,0,420,240);

    g.addColorStop(0,"#eeeeee");
    g.addColorStop(0.5,"#bbbbbb");
    g.addColorStop(1,"#eeeeee");

    ctx.fillStyle=g;
    ctx.fillRect(0,0,420,240);


    // 刮层文字
    ctx.fillStyle="#888";
    ctx.font="bold 28px Microsoft YaHei";
    ctx.textAlign="center";

    ctx.fillText(
        "刮开此处",
        210,
        130
    );

}


initScratch();


// 开始刮
function start(e){
    drawing=true;
    erase(e);
}

function end(){
    drawing=false;
}


function move(e){

    if(!drawing)return;

    erase(e);
}


// 擦除
function erase(e){

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



// 鼠标
canvas.addEventListener(
"mousedown",
start
);


canvas.addEventListener(
"mousemove",
move
);


canvas.addEventListener(
"mouseup",
end
);



// 手机
canvas.addEventListener(
"touchstart",
start
);


canvas.addEventListener(
"touchmove",
move
);


canvas.addEventListener(
"touchend",
end
);
