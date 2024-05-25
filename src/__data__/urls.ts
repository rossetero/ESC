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
        }
    },
    api:{
        main:getConfigValue('esc.api')
    },
}