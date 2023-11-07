import n from"node-fetch";var t=function(t,e,r){return n("https://www.dexi.tools/candles/uniswap/"+t+"/"+e+"?frame="+r).then(function(n){return n.json()}).then(function(n){return n})};t();export{t as getUniswapCandles};
//# sourceMappingURL=index.module.js.map
