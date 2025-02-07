import { getConfigValue, getNavigationValue } from "@brojs/cli"

const baseUrl = getNavigationValue('esc.main')


export const URLs = {
  baseUrl,

  ui:{
    games:{
      url:getNavigationValue('esc.games') && `${baseUrl}${getNavigationValue('esc.games')}`,
      on:Boolean(getNavigationValue('esc.games')),
    },
    u2k:{
      url:getNavigationValue('esc.4u2k') && `${baseUrl}${getNavigationValue('esc.4u2k')}`,
      on:Boolean(getNavigationValue('esc.4u2k')),
    },
    b2b:{
      url:getNavigationValue('esc.b2b') && `${baseUrl}${getNavigationValue('esc.b2b')}`,
      on:Boolean(getNavigationValue('esc.b2b')),
    }, 
    prices:{
      url:getNavigationValue('esc.prices') && `${baseUrl}${getNavigationValue('esc.prices')}`,
      on:Boolean(getNavigationValue('esc.prices')),
    },
  },
  api:{
    main:getConfigValue('esc.api')
  },
}