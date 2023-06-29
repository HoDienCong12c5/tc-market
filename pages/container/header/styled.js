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
`
export const LogoHeader = styled(ImageNext)`
    height: 40px;
    width: 40px;
`
export default ()=>{};