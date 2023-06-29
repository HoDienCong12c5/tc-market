import React from 'react'
import Image from 'next/image'
import styled from 'styled-components';
const ContainerImageNext = styled.div`

  
`;
const ImgCustom = styled(Image)`
  width: 100% !important;
  height: 100%;
`;
const ImageNext = ({
  src,
  alt = 'Picture of the author',
  quality = 50,
  width = 50,
  height = 50,
  fullSize = false,
  className = '',
  classNameImg = '',
  ...props
}) => {
  return (
    <ContainerImageNext
      style={{
        width: fullSize ? '100%' : width?.toString().includes('px') ? `${width}px` : width,
        height: fullSize ? '100%' : height?.toString().includes('px') ? `${height}px` : height,
      }}
      className={className}
    >
      <ImgCustom
        className={classNameImg}
        loading="lazy"
        src={src}
        alt={alt}
        quality={quality}
        width={'100%'}
        height={'100%'}
        sizes={'min-width: 100%'}
        {...props}
      />
    </ContainerImageNext>
  )
}
export default ImageNext
