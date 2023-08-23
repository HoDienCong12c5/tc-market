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
  top:-10px;
  left: 0;
  width: 100%;
  text-align: center;
  
`;
export const ButtonEx = styled.div`
  height: 30px;
  width: ${props=>props.width ?? 50}px;
  line-height: 27px;
  font-weight: bold;
  background: white;
  color:black;
  justify-content:center;
  text-align: center;
  align-items: flex-end;
  border: 1px solid rgba(0,0,0,0.2);
  cursor: pointer;

`;
export const AmountCoffee = styled.div`
  height: 30px;
  min-width: 50px;
  line-height: 30px;
  font-weight: bold;
  background: white;
  color:black;
  justify-content:center;
  text-align: center;
  align-items: flex-end;
  border: 1px solid rgba(0,0,0,0.2);
`;

export default () => {};
