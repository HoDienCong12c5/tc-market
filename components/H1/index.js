import React from 'react';
import { styled } from 'styled-components';
const H1 = styled.h1`
  font-size: ${(props) => props.size}px !important;
  text-transform: ${(props) => (props.transform ? 'uppercase' : 'auto')};
  @media screen and (max-width: 768px) {
    font-size: ${(props) => props.size - 2}px !important;
  }
`;

const H1Custom = ({ text, size = 36, transform = false, ...props }) => {
  return (
    <H1
      size={size}
      transform={transform}
      dangerouslySetInnerHTML={{
        __html: text,
      }}
      {...props}
    />
  );
};

export default H1Custom;
