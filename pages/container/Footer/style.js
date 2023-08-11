import ImageNext from '@/components/ImageNext';
import { NormalText } from '@/components/TextSize';
import styled from 'styled-components';
export const ContainerItem = styled(NormalText)`
  display: flex;
  gap: 5px;
  width: 100%;
  :hover {
    transform: scale(1.01);
  }
  cursor: pointer;
  align-items: center;
`;
export const IconItem = styled(ImageNext)`
  height: 25px !important;
  width: 25px !important;
`;

export const FooterCustom = styled.footer`
  padding-top: 50px;
  background: ${(props) => (props.isLP ? '#e4e8e6' : '#f2ece1 ')};
`;
export default () => {};
