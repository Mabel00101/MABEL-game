const list=[
'今日宜：学习、创作、求财<br>今日忌：冲动、拖延<br>幸运色：金色<br>幸运方位：东南',
'今日宜：社交、合作、探索<br>今日忌：争执<br>幸运色：红色<br>幸运方位：正南'
];
document.getElementById('fortuneText').innerHTML=list[Math.floor(Math.random()*list.length)];
