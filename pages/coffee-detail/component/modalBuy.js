import ButtonBasic from '@/components/ButtonBasic';
import MyInputNumber from '@/components/MyInputNumber';
import { InputForm } from '@/components/TextField';
import { MediumText } from '@/components/TextSize';
import useModal from '@/hook/useModal';
import { numberWithCommas } from '@/utils/function';
import { Col, Form, InputNumber, Row } from 'antd';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
export const FormItem = styled(Form.Item)`
/* .ant-form-item-row{
  .ant-form-item-control{
    width: 100% !important;
    flex: none;
    min-width: 100%; 
  }
} */
`;
const ModalBuy = ({coffee,number,callback}) => {
  console.log({coffee});
  const messages = useSelector(state => state.app.language.messages)
  const {closeModal} = useModal()
  const [form] = Form.useForm()

  const [errorBuy, setErrorBuy] = useState(false)
  const [formData, setFormData] = useState({
    address:'',
    numberPhone:null,
    gmail:'',
    linkMess:'',
    fullName:'',
  });
  useEffect(() => {
    form.setFieldsValue({
      address:'',
      numberPhone:'',
      gmail:'',
      linkMess:'',
      fullName:'',
    })
  }, [])

  const checkNameUser = (rule, nameUser) => {
    if(!nameUser){
      setErrorBuy(true)
      return Promise.reject(messages.warning.errorUserName)
    }
    setErrorBuy(false)
  }
  const checkSDT = (rule, sdt) => {
    console.log({sdt,rule});
    if(!sdt){
      setErrorBuy(true)
      return Promise.reject(messages.warning.errorSDT)
    }else{
      if(sdt.length < 9 || sdt.length > 10){
        setErrorBuy(true)
        return Promise.reject(messages.warning.errorSDT)
      }
    }
    setErrorBuy(false)
  }
  const checkAddress = (rule,address) => {
    if(!address){
      return Promise.reject(messages.warning.errorAddress)
    }

  }

  const checkLinkFace = (linkFace) => {
    console.log('====================================');
    console.log({linkFace});
    console.log('====================================');

  }
  const checkGmail = (gmail) => {
    console.log('====================================');
    console.log({gmail});
    console.log('====================================');

  }
  return (
    <div className='flex flex-col items-start gap-5'>
      <p className='text-26 mb-0 w-full text-center'>
        {messages.coffeeDetail.modalBuy.titleOder}
      </p>
      <div className='flex gap-3'>
        <MediumText fontWeight={500} color={'green'}>
          {`${messages.textPopular.nameProduct}:`}
        </MediumText>
        <MediumText fontWeight={500} color={'green'}>
          {coffee?.name}
        </MediumText>
      </div>
      <div className='flex'>
        <MediumText fontWeight={500} color={'green'}>
          {`${messages.textPopular.totalMoney}`}
        </MediumText>
        <MediumText fontWeight={500} color={'green'}>
          {`:  ${number} * ${numberWithCommas(coffee?.price ?? 0)} = ${numberWithCommas((coffee?.price ?? 0) * number)} VND`}
        </MediumText>
      </div>
      <Form
        spellCheck
        form={form}
        initialValues={formData}
        style={{ width: '100%' }}
        onValuesChange={(changedValues, allValue) => setFormData(allValue)}
      >
        <FormItem
          validateStatus="warning"
          name={'fullName'}
          rules={[{ validator: checkNameUser }]}
          label={messages.coffeeDetail.modalBuy.enterName}
        >
          <InputForm placeholder={messages.coffeeDetail.modalBuy.enterName} />
        </FormItem>
        <FormItem
          name={'numberPhone'}
          rules={[{ validator: checkSDT }]}
          label={messages.coffeeDetail.modalBuy.enterNumberPhone}
        >
          {/* <InputForm type='number' autoComplete='off' /> */}
          <InputForm type='number' placeholder={messages.coffeeDetail.modalBuy.enterNumberPhone} />
        </FormItem>
        <FormItem
          name={'address'}
          rules={[{ validator: checkAddress }]}
          label={messages.coffeeDetail.modalBuy.enterAddress}
        >
          <InputForm placeholder={messages.coffeeDetail.modalBuy.enterAddress} />
        </FormItem>
        <FormItem
          name={'linkMess'}
          label={messages.coffeeDetail.modalBuy.enterLinkFace}
        >
          <InputForm placeholder={messages.coffeeDetail.modalBuy.enterLinkFace} />
        </FormItem>
        <FormItem
          name={'gmail'}
          label={messages.coffeeDetail.modalBuy.enterGmail}
        >
          <InputForm placeholder={messages.coffeeDetail.modalBuy.enterGmail} />
        </FormItem>
      </Form>
      <div className='flex w-full gap-24'>
        <ButtonBasic className={'w-1/2'} onClick={callback} disabled={errorBuy}>
          {messages.common.submit}
        </ButtonBasic>
        <ButtonBasic className={'w-1/2 btn-close'} onClick={closeModal} >
          {messages.common.close}
        </ButtonBasic>
      </div>
    </div>
  )
}

export default ModalBuy
