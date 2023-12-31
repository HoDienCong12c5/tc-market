import { images } from '@/common/images'
import { Row } from 'antd'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { MediumText } from '../TextSize'

const BtnBack = ({main,pageNow,...props}) => {
  const router = useRouter()
  return (
    <div className='w-full mb-20 pt-[24px] hover ' onClick={()=>router.back()} {...props}>
      <Row style={{gap:5}}>
        <Image
          loading='lazy'
          style={{height:20, width:20}}
          src={images.icon.iconBack}
          alt={images.icon.iconBack}
        />
        <MediumText
          style={{position:'relative', top:1}}
        > {pageNow}
        </MediumText>
      </Row>
    </div>
  )
}

export default BtnBack
