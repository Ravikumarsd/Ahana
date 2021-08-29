import AboutSection from './components/AboutSection/AboutSection'
import { aboutInfo } from './data'
export const aboutSectionList = (noOfItems = aboutInfo.length, isHome) => {
  console.log('aboutSectionList', isHome)
  return aboutInfo.slice(0, noOfItems).map(info => {
    return (
      <AboutSection
        key={info.id}
        id={info.id}
        description={info.description}
        heading={info.heading}
        isHome={isHome}
      />
    )
  })
}
