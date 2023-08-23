import { InputNumber } from 'antd'
import React from 'react'
import styled from 'styled-components';
const InputCustom = styled(InputNumber)`
  border-style: hidden ;
  &:hover,
  &:active{
    border-style:hidden;
    border-bottom: 1px solid black;
    padding: 0px !important;
  }
  border-bottom: 1px solid black;
  width:100%;
  border-radius: ${props=>props.borderRadius}px;
  padding: 0px !important;
  input{
    padding: 0px !important;

  }
`;
const MyInputNumber = ({
  onChange = ()=>{},
  style = {},
  className = '',
  value,
  bordered = false,
  prefix = null,
  $disabled = false,
  borderRadius = 0,
  placeholder = '',
  ...props
}) => {
  return (
    <InputCustom
      placeholder={placeholder}
      borderRadius={borderRadius}
      disabled={$disabled}
      bordered={bordered}
      onChange={onChange}
      style={style}
      value={value}
      className={className}
      prefix={prefix}
      {...props}
    />
  )
}

export default MyInputNumber
