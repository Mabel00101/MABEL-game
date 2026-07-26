const fortunes=[


{
title:"乾卦 · 飞龙在天",
level:"上上签",
reward:"888积分",
desc:"事业腾飞，贵人相助",
icon:"🐉"
},


{
title:"坤卦 · 厚德载物",
level:"大吉",
reward:"666积分",
desc:"积累福气，好运连连",
icon:"🌏"
},


{
title:"火天大有",
level:"上上签",
reward:"999积分",
desc:"财运旺盛",
icon:"🔥"
},


{
title:"水山蹇",
level:"小吉",
reward:"88积分",
desc:"先难后易",
icon:"💧"
},


{
title:"雷风恒",
level:"吉签",
reward:"188积分",
desc:"坚持必有收获",
icon:"⚡"
}


];



function getFortune(){

let i=Math.floor(
Math.random()*fortunes.length
);


return fortunes[i];


}
