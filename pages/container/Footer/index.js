import React from 'react'
import Media from 'react-media';
import styles from './styles.module.scss'
import { MediumText } from '@/components/TextSize';
import { useSelector } from 'react-redux';
import { ContainerItem, IconItem } from './style';
import Img, { images } from '@/common/images';
import { useRouter } from 'next/router';
const Footer = () => {
  const messages = useSelector(state=>state.app.language.messages)
  const router = useRouter()
  const renderDesktop = () => {
    return <div className={styles.containerFooter}>
      <div className='flex w-1/3 gap-15 flex-col'>
        <div className='font-bold uppercase w-full text-18'>
          {messages.footer.aboutContact}
        </div>
        <ContainerItem>
          <IconItem alt='0392225405' src={Img.footer.iconNumberPhone} />
          <div>
            0392225405
          </div>
        </ContainerItem>
        <ContainerItem>
          <IconItem alt='hodiecong12c5@gmail.com' src={Img.footer.iconGmail} />
          <div>
            hodiecong12c5@gmail.com
          </div>
        </ContainerItem>
        <ContainerItem>
          <IconItem alt='83/41, Phạm Văn Bạch, P.15, Tân Bình, TP.HCM' src={Img.footer.iconAddress} />
          <div>
          83/41, Phạm Văn Bạch, P.15, Tân Bình, TP.HCM
          </div>
        </ContainerItem>
        <ContainerItem>
          <IconItem alt='Thôn thanh giáo, IAKREL, Đức Cơ, Gia Lai' src={Img.footer.iconAddress} />
          <div>
          Thôn thanh giáo, IAKREL, Đức Cơ, Gia Lai
          </div>
        </ContainerItem>
        <ContainerItem>
          <IconItem src={''} />
          <div>
            0392225405
          </div>
        </ContainerItem>

      </div>
      <div className='flex w-2/3'>
        right footer
      </div>
    </div>
  }
  const renderMobile = () => {
    return <></>
  }
  return (
    <footer>
      <Media query="(min-width: 768px)">
        {(match) => {
          if (match) {
            return renderDesktop();
          }
          return renderMobile();
        }}
      </Media>
    </footer>
  )
}

export default Footer
