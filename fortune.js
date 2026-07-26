const fortunes = [

{
title:"乾卦 · 飞龙在天",
level:"一等奖",
reward:"888积分",
desc:"事业腾飞，贵人相助",
icon:"🐉"
},

{
title:"坤卦 · 厚德载物",
level:"二等奖",
reward:"500积分",
desc:"稳中有升，福运绵长",
icon:"🌿"
},

{
title:"离卦 · 火照四方",
level:"三等奖",
reward:"200积分",
desc:"灵感爆发，好运相随",
icon:"🔥"
},

{
title:"震卦 · 雷动九天",
level:"幸运奖",
reward:"100积分",
desc:"突破困境，迎来机会",
icon:"⚡"
},

{
title:"随机签",
level:"谢谢参与",
reward:"好运继续",
desc:"下次会有惊喜",
icon:"🍀"
}

];


// 随机抽签

function getFortune(){

let r=Math.random()*100;


if(r<10){

return fortunes[0];

}

else if(r<30){

return fortunes[1];

}

else if(r<60){

return fortunes[2];

}

else if(r<85){

return fortunes[3];

}

else{

return fortunes[4];

}


}
