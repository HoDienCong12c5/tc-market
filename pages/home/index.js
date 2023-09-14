import React, { useEffect, useState } from 'react'
import { Container } from './styled'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import HeaderSeo from '@/components/HeaderSeo'
import BannerHome from './Components/Banner'
import { requestPermission } from '@/utils/firebaseMess'

const HomeScreen = () => {
  const [tokenFirebase, settokenFirebase] = useState(null)
  useEffect(() => {
    if (
      'Notification' in window &&
      'serviceWorker' in navigator &&
      'PushManager' in window
    ) {
      requestPermission()

    }


  }, [ ])

  const messages = useSelector(state=>state.app.language)
  const renderDesktop = () => {
    return <>
      <BannerHome />
    </>
  }
  return (
    <Container >
      <HeaderSeo />
      {tokenFirebase}
      {renderDesktop()}
      <div>
        <Image src={'https://ipfs.pantograph.app/ipfs/QmPvLUPSEDbR2Qoo6J83aMfPnpBYeF5e4MhrjH853JJcF8?filename=MinionDevil_ANIMA.png'} width={150} height={150}/>

      </div>
      <Image src={'https://ipfs.pantograph.app/ipfs/QmPvLUPSEDbR2Qoo6J83aMfPnpBYeF5e4MhrjH853JJcF8?filename=MinionDevil_ANIMA.png'} width={150} height={150}/>

    </Container>
  )
}

export default HomeScreen
