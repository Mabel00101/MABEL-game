const fortunes = [

{
title:"乾卦·飞龙在天",
level:"一等奖",
reward:"888积分",
desc:"事业腾飞，贵人相助",
icon:"🐉"
},

{
title:"坤卦·厚德载物",
level:"二等奖",
reward:"188积分",
desc:"积累福气，财运渐旺",
icon:"🌏"
},

{
title:"离卦·光明之象",
level:"三等奖",
reward:"88积分",
desc:"灵感涌现，好事发生",
icon:"🔥"
},

{
title:"震卦·雷动九天",
level:"幸运奖",
reward:"18积分",
desc:"行动有惊喜",
icon:"⚡"
},

{
title:"普通签",
level:"谢谢参与",
reward:"福气+1",
desc:"今日平安顺遂",
icon:"🍀"
}

];


// 随机抽取
function getFortune(){

let random=Math.random()*100;


if(random<5){

return fortunes[0];

}

else if(random<20){

return fortunes[1];

}

else if(random<50){

return fortunes[2];

}

else if(random<80){

return fortunes[3];

}

else{

return fortunes[4];

}



}
