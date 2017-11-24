var nm8=function(){'use strict';return(a,b)=>{let c,d=0,e=0,f=()=>c=performance.now(),g=()=>{let h=-c+f();return e+=h,a(b?e/b:h),!d||e>=+b||requestAnimationFrame(g)},h={play:()=>(d=1,e>=+b&&(e=0),f(),g(),h),pause:()=>(d=0,h),stop:()=>(e=b||1/0,f(),g(),h)};return h}}();
//# sourceMappingURL=nm8.umd.js.map
