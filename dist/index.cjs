function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=/*#__PURE__*/e(require("node-fetch")),t=function(e,t,r){return n.default("https://www.dexi.tools/candles/uniswap/"+e+"/"+t+"?frame="+r).then(function(e){return e.json()}).then(function(e){return e})};t(),exports.getUniswapCandles=t;
//# sourceMappingURL=index.cjs.map
