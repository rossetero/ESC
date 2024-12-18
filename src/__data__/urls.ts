import { getConfigValue, getNavigationValue } from "@brojs/cli";
import { generatePath } from "react-router-dom";

const baseUrl = getNavigationValue('esc.main');


export const URLs = {
    baseUrl,

    ui:{
        games:{
            url:`${baseUrl}${getNavigationValue('esc.games')}`,
            on:Boolean(getNavigationValue('esc.games')),
        },
        u2k:{
            url:`${baseUrl}${getNavigationValue('esc.4u2k')}`,
            on:Boolean(getNavigationValue('esc.4u2k')),
        },
        b2b:{
            url:`${baseUrl}${getNavigationValue('esc.b2b')}`,
            on:Boolean(getNavigationValue('esc.b2b')),
        }, 
        prices:{
            url:`${baseUrl}${getNavigationValue('esc.prices')}`,
            on:Boolean(getNavigationValue('esc.prices')),
        },
    },
    api:{
        main:getConfigValue('esc.api')
    },
}