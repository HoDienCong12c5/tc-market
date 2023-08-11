import ImageNext from '@/components/ImageNext';
import Image from 'next/image';
import styled from 'styled-components';
const ImgCustom = styled(Image)`
   position: relative !important;
`;
export const ImageItemMain = styled(ImgCustom)`
 
  width: auto !important;
  height: auto !important;
  max-height: 500px !important;
  margin: auto;
`;

export const ContainerDiscos = styled.div`
  position: absolute !important;
  top:0;
  left: 0;
  width: 100%;
  text-align: center;
  
`;
export default () => {};
