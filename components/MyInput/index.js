import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components';
const { TextArea } = Input;
const InputBase = styled(Input)`
  border-radius: 0px !important;
  border: 0px !important;
  border-bottom: 1px solid #2b5540 !important;
  padding: ${(props) => (props.suffix ? '7px 10px;' : '10px 10px')};
  padding: 0px;
  color: black !important;
  &focus-visible,
  &:hover,
  &:focus {
    /* border: 1px solid black !important; */
  }
  &.ant-input-affix-wrapper {
    background-color: transparent !important;
    border: 0px;
  }
`;
const InputTextArea = styled(TextArea)`
  border-radius: 8px;
  &:focus,
  &:hover {
    border: 1px solid black !important;
  }
  &.input {
    max-width: 100%;
    &.ant-input {
      color: black !important;
    }
  }
  .count {
    width: 340px;
    text-align: right;
    color: #ffffff;
    font-size: 13px;
    line-height: 150%;
    opacity: 0.5;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
  .ant-form-item {
    margin-bottom: unset;
  }
  .ant-form-item-control-input-content {
    @media screen and (max-width: 768px) {
      max-width: 100%;
    }
    .ant-input {
      background: #192234;
      height: 120px;
      border-radius: unset !important;
      max-height: 120px;
      border: none !important;
      font-size: 15px;
      line-height: 150%;
      color: #ffffff;
      @media screen and (max-width: 768px) {
        margin-top: 20px;
      }
    }
    .ant-input:focus {
      box-shadow: none;
    }
    textarea {
      resize: none;
    }
  }
`;
const InputPassword = styled(InputBase.Password)`
  border-radius: 0px;
  padding: 0px;
  margin: 0px;
  border: 0px !important;
  border-bottom: 1px solid #2b5540 !important;
  &:focus,
  &:hover {
    /* border: 1px solid black !important; */
  }
  span.anticon.anticon-eye-invisible.ant-input-password-icon {
    color: black;
  }
  span.anticon.anticon-eye.ant-input-password-icon {
    color: black;
  }
`;
export const MyInput = ({
  iconRender = null,
  iconLeft = null,
  iconRight = null,
  password = false,
  textArea = false,
  ...props
}) => {
  return (
    <>
      {textArea && (
        <InputTextArea
          iconRender={iconRender}
          suffix={iconRight}
          prefix={iconLeft}
          {...props}
        />
      )}
      {password && (
        <InputPassword
          // iconRender={iconRender}
          suffix={iconRight}
          prefix={iconLeft}
          {...props}
        />
      )}
      {!textArea && !password && (
        <InputBase
          suffix={iconRight}
          iconRender={iconRender}
          prefix={iconLeft}
          {...props}
        />
      )}
    </>
  );
};
export default MyInput;
