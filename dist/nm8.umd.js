var nm8=function(){'use strict';//# sourceMappingURL=nm8.js.map
return function(a,b){let c,d,e,f=(g)=>{let h=-(d||g)+(d=g);a(b?Math.min(Math.max((e+=h)/b,0),1):h);return!c||e>=+b||requestAnimationFrame(f)},g={play:()=>(c=1,e&&e<=+b||(e=0),f(performance.now()),g),pause:()=>(c=0,g),stop:()=>(e=d=c=0,g)};return g}}();
//# sourceMappingURL=nm8.umd.js.map
