function nm8(a,b){let c,d,e,f=(g)=>{let h=+!c||-(d||g)+(d=g);a(b?Math.min(Math.max((e+=h)/b,0),1):h);return!c||e>=b||requestAnimationFrame(f)},g={play:()=>(c=1,b&&e<=b||(e=0),f(performance.now()),g),pause:()=>(c=0,g),stop:()=>(e=d=c=0,g)};return g}export default nm8;
//# sourceMappingURL=nm8.es5.js.map
