const c=document.getElementById('card');
const x=c.getContext('2d');
x.fillStyle='#aaa';
x.fillRect(0,0,320,180);
x.fillStyle='#333';
x.font='28px Microsoft YaHei';
x.fillText('刮 开 查 看',80,100);
x.globalCompositeOperation='destination-out';

let down=false;
c.onmousedown=()=>down=true;
c.onmouseup=()=>down=false;
c.onmousemove=e=>{
if(!down)return;
let r=c.getBoundingClientRect();
x.beginPath();
x.arc(e.clientX-r.left,e.clientY-r.top,18,0,7);
x.fill();
show();
};
function show(){
let d=x.getImageData(0,0,320,180),n=0;
for(let i=3;i<d.data.length;i+=4)
if(d.data[i]===0)n++;
if(n>20000){
c.style.display='none';
document.getElementById('result').classList.remove('hide');
}
}
