import { BG_BTN } from '@/common/constant';
import React from 'react'
import Media from 'react-media';
import styled from 'styled-components';
import { BtnBuyOtherProduct, ImgOtherProduct, TileOtherProduct } from './styled';
import { Col, Row } from 'antd';
import { images } from '@/common/images';
import ImageNext from '@/components/ImageNext';
import { useSelector } from 'react-redux';
const Container = styled.div`
  /* background: #e4e8e6; */
  width: calc(100% + 100px);
  margin-left: -50px;
  overflow: hidden;
`;
const ContainerWave = styled.div`
 width: 200%;
`;
const SVGCustom = styled.svg`
 height:150px;
 @media screen and (max-width: 768px) {
  height:120px;
  }
`;
const ContainerList = styled.div`
 display: flex;
 width: 100%;
 background: ${BG_BTN.bgBlue1};
`;
const ImageNextCustom = styled(ImageNext)`
  height: 250px !important;
  width: max-content !important;
  margin: auto;
  border-radius: 50%;
`;
const FooterBodyLandingPage = () => {
  const messages = useSelector(state=>state.app.language.messages)
  const renderDesktop = () => {
    return <Container>
      <ContainerWave className='animation_translate-3'>
        <SVGCustom width={'200vw'} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' preserveAspectRatio='none' >
          <path fill={BG_BTN.bgBlue1} className='elementor-shape-fill' d='M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
	c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
	c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z' />
        </SVGCustom>
      </ContainerWave>
      <ContainerList >
        <Row style={{position:'relative',top:-100}} className='animation__transformTop-5 w-full'>
          <Col className='col-basic gap-15' span={7}>
            <ImageNextCustom src={images.landingPage.logo} alt={images.landingPage.logo} />
            <TileOtherProduct >
              120.000 VND
            </TileOtherProduct>
            <BtnBuyOtherProduct >
              {messages.common.buyNow}
            </BtnBuyOtherProduct>
          </Col>
          <Col className='col-basic gap-15' span={7} offset={1}>
            <ImgOtherProduct src={images.landingPage.product2} alt={images.landingPage.product2} />
            <TileOtherProduct >
              120.000 VND
            </TileOtherProduct>
            <BtnBuyOtherProduct >
              {messages.common.buyNow}
            </BtnBuyOtherProduct>
          </Col>
          <Col className='col-basic gap-15' span={7} offset={1}>
            <ImageNextCustom src={images.landingPage.logo} alt={images.landingPage.logo} />
            <TileOtherProduct >
              120.000 VND
            </TileOtherProduct>
            <BtnBuyOtherProduct >
              {messages.common.buyNow}
            </BtnBuyOtherProduct>
          </Col>
        </Row>
      </ContainerList>
    </Container>
  }
  const renderMobile = () => {
    return <></>
  }
  return (
    <Media query="(min-width: 768px)">
      {(match) => {
        if (match) {
          return renderDesktop();
        }
        return renderMobile();
      }}
    </Media>
  )
}

export default FooterBodyLandingPage
