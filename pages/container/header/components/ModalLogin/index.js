
import { showNotification } from '@/Utils/function';
import { OBSERVER_KEY } from '@/common/constant';
import ButtonBasic from '@/components/ButtonBasic';
import MyInput from '@/components/MyInput';
import useModal from '@/hook/useModal';
import userUserInfo from '@/hook/useUserInfor';
import firebaseService from '@/pages/api/firebaseService';
import observer from '@/utils/observer';
import { Checkbox, Col, Form, Row } from 'antd';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ContentLogin = styled.div`
  display: flex;
  flex-direction: column;
  gap:10px;
  margin: auto;
  padding:16px;
  background:white;
  border-radius: 16px;
`;
const InputForm = styled(MyInput)`
height: 30px;
`
const ModalLogin = () => {
  const [form] = Form.useForm()
  const {closeModal} = useModal()
  const {isSigned} = userUserInfo()
  const message = useSelector(state=>state.app.language.messages)
  const modal = useSelector(state => state.app.modal)

  const [saveLogin, setSaveLogin] = useState(true)
  const [loadingLogin, setLoadingLogin] = useState(false)
  const [formData, setFormData] = useState({
    numberPhone :'',
    passWord:''
  });
  useEffect(() => {
    if(isSigned && modal){
      closeModal()
    }

    return ()=>{setLoadingLogin(false)}
  }, [isSigned])

  useEffect(() => {

    return ()=>{
      observer.removeListener(OBSERVER_KEY.LOGIN)
    }
  }, [isSigned])
  const handleLogin = async () => {
    let login = false
    console.log('====================================');
    console.log({formData});
    console.log('====================================');
    await setLoadingLogin(true)
    await firebaseService.login(formData.numberPhone,formData.passWord,saveLogin)
    if(!login){
      closeModal()
      showNotification('user name hoặc password chưa đúng')
    }
    await setLoadingLogin(false)
  }
  const onRememberLogin = () => {
    setSaveLogin(!saveLogin)
  }

  return (
    <ContentLogin >
      <Form
        name="basicform"
        form={form}
        initialValues={formData}
        style={{ width: '100%' }}
        onValuesChange={(changedValues, allValue) => setFormData(allValue)}
      >
        <Form.Item
          name={'numberPhone'}
          label={message.coffeeDetail.modalBuy.enterNumberPhone}
        >
          <InputForm
            placeholder={message.coffeeDetail.modalBuy.enterNumberPhone}
          />
        </Form.Item>
        <Form.Item

          name={'passWord'}
          label={message.register.enterPassWord}
        >
          <InputForm
            password
            placeholder={message.register.enterPassWord}
          />
        </Form.Item>
      </Form>
      <Checkbox checked={saveLogin} onChange={onRememberLogin}>{message.register.saveRegister}</Checkbox>
      <Row className={'mt-15'} >
        <Col span={11}>
          <ButtonBasic
            loading={loadingLogin}
            className={'w-full'}
            onClick={handleLogin}
          >
            {message.common.submit}
          </ButtonBasic>
        </Col>
        <Col span={11}offset={1}>
          <ButtonBasic
            className={'w-full btn-close'}
            onClick={closeModal} >
            {message.common.close}
          </ButtonBasic>
        </Col>
      </Row>
    </ContentLogin>
  )
}

export default ModalLogin
