const c=document.getElementById('scratch');
const x=c.getContext('2d');
x.fillStyle='#bfc0c0';
x.fillRect(0,0,c.width,c.height);
x.fillStyle='#777';
x.font='30px Microsoft YaHei';
x.fillText('刮开银膜',110,120);
let d=false;
function cut(e){
if(!d)return;
let r=c.getBoundingClientRect();
x.globalCompositeOperation='destination-out';
x.beginPath();
x.arc(e.clientX-r.left,e.clientY-r.top,30,0,Math.PI*2);
x.fill();
}
c.onmousedown=()=>d=true;
c.onmouseup=()=>d=false;
c.onmousemove=cut;
