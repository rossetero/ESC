import { getConfigValue, getNavigationsValue } from "@ijl/cli";
import { generatePath } from "react-router-dom";

const baseUrl = getNavigationsValue('esc.main');


export const URLs = {
    baseUrl,

    ui:{
        games:{
            url:`${baseUrl}${getNavigationsValue('esc.games')}`,
            on:Boolean(getNavigationsValue('esc.games')),
        },
        u2k:{
            url:`${baseUrl}${getNavigationsValue('esc.4u2k')}`,
            on:Boolean(getNavigationsValue('esc.4u2k')),
        },
        b2b:{
            url:`${baseUrl}${getNavigationsValue('esc.b2b')}`,
            on:Boolean(getNavigationsValue('esc.b2b')),
        }, 
        prices:{
            url:`${baseUrl}${getNavigationsValue('esc.prices')}`,
            on:Boolean(getNavigationsValue('esc.prices')),
        },
    },
    api:{
        main:getConfigValue('esc.api')
    },
}