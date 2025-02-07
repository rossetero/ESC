import React from 'react'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { Main1 } from '../components/common'
import { B2BIntro } from '../components/b2b-intro'
import { B2BBenefits } from '../components/b2b-benefits'
import { B2BInvite } from '../components/b2b-invite'

const b2b_page = () => {
  return (
    <>
      <Header />

      <Main1>

        <B2BIntro />

        <B2BBenefits />

        <B2BInvite />

      </Main1>
      
      <Footer noMargin/>
    </>
  )
}

export default b2b_page