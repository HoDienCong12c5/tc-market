import React, { useEffect, useState } from 'react'
import { Container } from './styled'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import HeaderSeo from '@/components/HeaderSeo'
import BannerHome from './Components/Banner'
import { FirebaseMess } from '@/utils/firebaseConfig'

const HomeScreen = () => {
  const [tokenFirebase, settokenFirebase] = useState(null)
  useEffect(() => {
    function requestPermission () {
      console.log('Requesting permission...')
      Notification.requestPermission().then(async (permission) => {
        if (permission === 'granted') {
          console.log('Notification permission granted.')
          const mes = await FirebaseMess.cloudMess()
          settokenFirebase(mes)
          console.log({ mes })
        }
      })
    }
    requestPermission()


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
