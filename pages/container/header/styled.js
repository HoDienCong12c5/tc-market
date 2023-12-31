import ButtonBasic from '@/components/ButtonBasic';
import ImageNext from '@/components/ImageNext';
import styled from 'styled-components';
export const ContainerBaseHeader = styled.div`
  width: 100%;
  border: 1px solid white;
`
export const ContainerHeader = styled.div`
  display: flex;
  gap:10px;
  align-items: center;
  width: 100%;
  max-width: 1550px;
  padding: 0 50px;
  @media screen and (max-width: 768px) {
  padding: 0 20px;

  }
`
export const LogoHeader = styled(ImageNext)`
    height: 40px;
    width: 40px;
`
export const BtnAccUser = styled(ButtonBasic)`
   display: flex;
   align-items: center;
   border-radius: 0px;
   
`
export default ()=>{};
