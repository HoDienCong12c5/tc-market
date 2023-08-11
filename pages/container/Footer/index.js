import React, { useEffect, useState } from 'react';
import Media from 'react-media';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import { ContainerItem, FooterCustom, IconItem } from './style';
import Img, { images } from '@/common/images';
import { useRouter } from 'next/router';
import GoogleMap from './component/ggMap';
import { FirebaseContact } from '@/utils/firebaseConfig';
const Footer = () => {
  const messages = useSelector((state) => state.app.language.messages);
  const router = useRouter();

  const [dataContact, setDataContact] = useState(null)

  useEffect(() => {
    const getDataContact = async () => {
      const data = await FirebaseContact.getAllData()
      console.log({data});
      if(data[0]){
        setDataContact(data[0])
      }
    }
    getDataContact()
  }, [])
  console.log({dataContact});
  const renderDesktop = () => {
    return (
      <div className={styles.containerFooter}>
        <div className="flex w-1/3 gap-15 flex-col">
          <div className="font-bold uppercase w-full text-18">
            {messages.footer.aboutContact}
          </div>
          <ContainerItem>
            <IconItem alt={dataContact?.sdt ?? '0392225405'} src={Img.footer.iconNumberPhone} />
            <div>{dataContact?.sdt ?? '0392225405'}</div>
          </ContainerItem>
          <ContainerItem>
            <IconItem
              alt={dataContact?.gmail ?? 'hodiecong12c5@gmail.com'}
              src={Img.footer.iconGmail}
            />
            <div>{dataContact?.gmail ?? 'hodiecong12c5@gmail.com'}</div>
          </ContainerItem>
          <ContainerItem>
            <IconItem
              alt={dataContact?.address ?? '83/41, Phạm Văn Bạch, P.15, Tân Bình, TP.HCM'}
              src={Img.footer.iconAddress}
            />
            <div>{dataContact?.address ?? '83/41, Phạm Văn Bạch, P.15, Tân Bình, TP.HCM'}</div>
          </ContainerItem>
          <ContainerItem>
            <IconItem
              alt={dataContact?.permanentAddress ?? 'Thôn thanh giáo, IAKREL, Đức Cơ, Gia Lai'}
              src={Img.footer.iconAddress}
            />
            <div>{dataContact?.permanentAddress ?? 'Thôn thanh giáo, IAKREL, Đức Cơ, Gia Lai'}</div>
          </ContainerItem>
          {/* <ContainerItem>
            <IconItem
              src={Img.footer.iconNumberPhone}
            />
            <div>{dataContact?.sdt ?? '0392225405'}</div>
          </ContainerItem> */}
        </div>
        <div className="flex w-2/3">
          <GoogleMap dataContact={dataContact} />

        </div>
      </div>
    );
  };
  const renderMobile = () => {
    return <></>;
  };
  return (
    <FooterCustom isLP={router.pathname === '/landing-page'}>
      <Media query="(min-width: 768px)">
        {(match) => {
          if (match) {
            return renderDesktop();
          }
          return renderMobile();
        }}
      </Media>
    </FooterCustom>
  );
};

export default Footer;
