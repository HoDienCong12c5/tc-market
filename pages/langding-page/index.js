import React from 'react'
// import styles from './landingPage.modul.scss'
import { ContainerLadingPage } from './style'
import Aos from 'aos'
import Media from 'react-media'
import HeaderLadingPage from './component/header'
import { useEffect } from 'react'
const LandingPage = () => {
  useEffect(() => {
    Aos.init({debounceDelay:3})

  }, [])

  const renderDesktop = () => {

    return <ContainerLadingPage>
      <HeaderLadingPage />
    </ContainerLadingPage>
  }
  const renderMobile = () => {

    return <ContainerLadingPage>LandingPage</ContainerLadingPage>
  }
  return (
    <Media query='(min-width: 768px)'>
      {(match) => {
        if (match) {
          return renderDesktop()
        }
        return renderMobile()
      }}

    </Media>
  )
}

export default LandingPage
