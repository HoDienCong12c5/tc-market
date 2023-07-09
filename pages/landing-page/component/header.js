import { images } from '@/common/images';
import ButtonBasic from '@/components/ButtonBasic';
import H1Custom from '@/components/H1';
import ImageBase from '@/components/ImageBasic';
import ImageNext from '@/components/ImageNext';
import { NormalText } from '@/components/TextSize';
import { Col, Row } from 'antd';
import React from 'react';
import Media from 'react-media';
import styled from 'styled-components';
const ColCustom = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ImageLogo = styled(ImageBase)`
  border-radius: 25% 25% 35% 0%;
`;
const ImageLogo2 = styled(ImageBase)`
  border-radius: 25%;
`;
const ContainerImg = styled.div`
  position: relative;
  top: 50px;
  width: 100%;
`;
const ContainerSologon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 50px;
`;
const BtnBuyNow = styled(ButtonBasic)`
  border-radius: 0px;
  height: 50px;
  width: fit-content;
  font-size: 24px;
  animation: zoom 2s ease-in-out infinite alternate;
  @keyframes zoom {
    from {
      transform: scaleX(1);
    }
    to {
      transform: scaleX(1.1);
    }
  }
  @-webkit-keyframes zoom {
    from {
      transform: scaleX(1);
    }
    to {
      transform: scaleX(1.2);
    }
  }
`;
const ContainerElement = styled.div`
  width: 100%;
  display: flex;
  gap:10px;
  align-items: center;
`;
const IcoElement = styled(ImageBase)`
  height: auto;
  width: 100px;
`
const ContainerMobile = styled.div``;
const HeaderLadingPage = () => {
  const renderDesktop = () => {
    return (
      <>
        <Row style={{ width: '100%' }} justify={'center'}>
          <Col span={13}>
            <ContainerSologon>
              <H1Custom size={42} text={'Mlem Coffee Sắc hương Tây Nguyên'} />
              <NormalText size={20} className="mb-15">
                Chúng tôi tự hào là nơi bạn có thể tìm thấy những sản phẩm cà
                phê chất lượng cao và độc đáo. Chúng tôi đặt tâm huyết vào việc
                chọn lọc những hạt cà phê tốt nhất từ các nguồn cung cấp uy tín
                trên toàn Tây Nguyên.
              </NormalText>
              <BtnBuyNow>Mua ngay</BtnBuyNow>
            </ContainerSologon>
          </Col>
          <ColCustom span={9} offset={2}>
            <ContainerImg>
              <ImageLogo fullSize src={images.landingPage.coffee1} />
            </ContainerImg>
          </ColCustom>
        </Row>
        <Row style={{ width: '100%' }} justify={'center'} className="mt-150">
          <ColCustom span={9}>
            <div style={{width:'90%'}}>
              <ImageLogo2 fullSize src={images.landingPage.coffee1} />
            </div>
          </ColCustom>
          <Col span={13} offset={2}>
            <ContainerSologon>
              <ContainerElement>
                <IcoElement src={images.icon.iconHeart}/>
                <NormalText>
                  100% nguyên chất từ Tây Nguyên
                </NormalText>
              </ContainerElement>
              <ContainerElement>
                <IcoElement src={images.icon.iconHeart}/>
                <NormalText>
                  100% nguyên chất từ Tây Nguyên
                </NormalText>
              </ContainerElement>
              <ContainerElement>
                <IcoElement src={images.icon.iconHeart}/>
                <NormalText>
                  100% nguyên chất từ Tây Nguyên
                </NormalText>
              </ContainerElement>
            </ContainerSologon>
          </Col>
        </Row>
      </>
    );
  };
  const renderMobile = () => {
    return (
      <div>
        <ContainerSologon>
          <H1Custom size={42} text={'Mlem Coffee Sắc hương Tây Nguyên'} />
          <NormalText>Mlem Coffee Sắc hương Tây Nguyên</NormalText>
          <BtnBuyNow>Mua ngay</BtnBuyNow>
        </ContainerSologon>
      </div>
    );
  };
  return (
    <Media query="(min-width: 768px)">
      {(match) => {
        if (match) {
          return renderDesktop();
        }
        return renderMobile();
      }}
    </Media>
  );
};

export default HeaderLadingPage;
