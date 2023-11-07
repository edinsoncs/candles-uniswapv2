//DEXI 
//DEV ECS
import fetch from 'node-fetch';


//get token data
export const getUniswapCandles = (primary_address, second_address, time) => { 


    /**
     *  Parameters
     * A => token_main example ( mytoken address) or ( 0x8390a1da07e376ef7add4be859ba74fb83aa02d5 )
     * B => token_pair example (WETH) or (ETH) or (USDT) ( 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2 ) 
     * C => time => default 720
    */

    /**
     * 1440 => 24 hours => recommended
     * 720 => 12 hours => recommended
     * 120 => 2 hour => recommended
     * 60 => 1 hour => recommended
     * 15 => 15 minute
     * 5 => 5 minute
     * 1 => 1 minute
    */

    const api_website_pro = 'https://www.dexi.tools/candles/uniswap/'+primary_address+'/'+second_address+'?frame='+time;

    return fetch(api_website_pro)
        .then(response => response.json())
        .then((data) => {
            return data;
        });
}

getUniswapCandles();