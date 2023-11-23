
import ArticleSection from '../articleSection/articleSection.component'
import PartnerSection from '../partners/partners.component'
import ThirdSection from '../thirdSection/thirdSection.component'
import Arrow from '../arrow/arrow.component'

function Layout() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smooth scrolling
    });
  };
  return (
    <>
    <div className="m-auto">
    <ArticleSection></ArticleSection>
    <ThirdSection></ThirdSection>
    <PartnerSection/>
    <Arrow onClick={scrollToTop} direction="up"></Arrow>
    </div>
    </>
  )
}

export default Layout