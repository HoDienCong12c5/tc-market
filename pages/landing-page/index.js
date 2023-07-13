import React from 'react'
// import styles from './landingPage.modul.scss'
import { ContainerLadingPage } from './style'
import Aos from 'aos'
import Media from 'react-media'
import HeaderLadingPage from './component/header'
import { useEffect } from 'react'
import FooterBodyLandingPage from './component/footer'
import SEOLP from './seo'
const LandingPage = () => {
  useEffect(() => {
    Aos.init({debounceDelay:3})

  }, [])

  const renderDesktop = () => {

    return <ContainerLadingPage>
      {/* <HeaderLadingPage /> */}
    </ContainerLadingPage>
  }
  const renderMobile = () => {

    return <ContainerLadingPage>LandingPage</ContainerLadingPage>
  }
  return (
    <>
      <SEOLP />
      <HeaderLadingPage />
      <FooterBodyLandingPage />
      <Media query='(min-width: 768px)'>
        {(match) => {
          if (match) {
            return renderDesktop()
          }
          return renderMobile()
        }}

      </Media>
    </>

  )
}
export const getInitialProps = ({query})=>{
  return {props:{}}
}
export default LandingPage
