import ImageNext from '@/components/ImageNext';
import Image from 'next/image';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styled from 'styled-components';
const ImgCustom = styled(Image)`
  position: relative !important;
  img{
  position: relative !important;

  }
`;
const BannerHome = () => {
  const images = [
    'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  ];

  return (
    <Slide cssClass='slider-show' slidesToScroll={1} indicators={true}>
      {images.map((each, index) => (
        <div key={index} style={{ width: '100%' }}>
          {/* <img
            fill
            alt="Slide Image"
            src={each}
          /> */}
          <div className='w-500 h-500' style={{background:'red'}}></div>
        </div>
      ))}
    </Slide>
  );
};

export default BannerHome;
