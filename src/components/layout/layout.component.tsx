import React from 'react'
import Slider from '../carrousel/slider.compoenent'
import ArticleSection from '../articleSection/articleSection.component'
import PartnerSection from '../partners/partners.component'
import ArrowUp from '../arrow-up.component'
import ThirdSection from '../thirdSection/thirdSection.component'
import Arrow from '../arrow/arrow.component'

function Layout() {
  return (
    <>
    <div className="m-auto">
    <ArticleSection></ArticleSection>
    <ThirdSection></ThirdSection>
    <PartnerSection/>
    <div onClick={()=>scroll({top:100})}></div>
    <Arrow direction="up"></Arrow>
    </div>
    </>
  )
}

export default Layout