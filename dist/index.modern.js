import t from"node-fetch";const e=(e,o,n)=>t("https://www.dexi.tools/candles/uniswap/"+e+"/"+o+"?frame="+n).then(t=>t.json()).then(t=>t);e();export{e as getUniswapCandles};
//# sourceMappingURL=index.modern.js.map
