import { images } from '@/common/images';
import H1Custom from '@/components/H1';
import ImageBase from '@/components/ImageBasic';
import ImageNext from '@/components/ImageNext';
import { Col, Row } from 'antd';
import React from 'react'
import Media from 'react-media';
import styled from 'styled-components';
const ColCustom = styled(Col)`
  
`;
const ImageLogo = styled(ImageBase)`
  border-radius: 50%;
`;
const HeaderLadingPage = () => {
  const renderDesktop = () => {

    return <Row style={{width:'100%'}} justify={'center'}>
      <ColCustom span={7}>
        <H1Custom
          transform
          text={'MLEM COFFEE SẮC HƯƠNG TÂY NGUYÊN'}
        />
      </ColCustom>
      <ColCustom span={8} offset={1}>
        <div>
          <ImageLogo fullSize src={images.landingPage.logo}/>
        </div>
      </ColCustom>
      <ColCustom span={7} offset={1}>
        <div>
          right
        </div>
      </ColCustom>
    </Row>
  }
  const renderMobile = () => {

    return <div>
      renderMobile
    </div>
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

export default HeaderLadingPage
