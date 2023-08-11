import { FirebaseCoffee } from '@/utils/firebaseConfig';
import React, { useEffect, useState } from 'react'
import MyLoading from '@/components/MyLoading';
import Media from 'react-media';
import { ContainerDiscos, ImageItemMain } from './styled';
import BtnBack from '@/components/BtnBack';
import { MediumText, NormalText } from '@/components/TextSize';
import useModal from '@/hook/useModal';
import userUserInfo from '@/hook/useUserInfor';
import { useSelector } from 'react-redux';
import { numberWithCommas, roundingNumber } from '@/utils/function';
import ButtonBasic from '@/components/ButtonBasic';
import ImageNext from '@/components/ImageNext';
import { images } from '@/common/images';
import { Button } from 'antd';
import ModalBuy from './component/modalBuy';
import HeaderSeo from '@/components/HeaderSeo';

const CoffeeDetail = ({id,nameItem}) => {
  const { openModal, closeModal } = useModal()
  const { isSigned } = userUserInfo()
  const messages = useSelector(state => state.app.language.messages)

  const [coffeeDetail, setCoffeeDetail] = useState(null)
  const [listImage, setListImage] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isLike, setIsLike] = useState(false)

  useEffect(() => {
    const getData = async() => {
      const data = await FirebaseCoffee.getDataByID(id)
      if(data){
        setCoffeeDetail(data)
        setLoading(false)
      }
      console.log({data});
    }
    const getDataListImage = async() => {
      // const data = await FirebaseCoffee.getDataByID(id)
      // if(data){
      //   setCoffeeDetail(data)
      //   setLoading(false)
      // }
      // console.log({data});
    }
    getData()
    getDataListImage()
  }, [])

  const buyCoffee = () => {
    openModal({
      content:<ModalBuy />
    })
  }
  return (
    <>
      <HeaderSeo
        title={nameItem}
        keyWord={`${nameItem} - Cà phê Gia Lai `}
        description={`Cà phê Gia Lai - ${nameItem}`}
      />
      {
        loading ? (
          <MyLoading />
        ) : (
          <>
            <BtnBack />
            <div className='grid grid-cols-1 gap-20 md:grid-cols-2'>
              <div style={{position:'relative'}}>
                <ImageItemMain
                  fill
                  src={coffeeDetail.image_main}
                />
                <ContainerDiscos>
                  hasdjkasghdj
                </ContainerDiscos>
              </div>
              <div className='flex flex-col gap-20'>
                <h1 className='text-[36px] mb-0'>
                  {coffeeDetail.name}
                </h1>
                <MediumText>
                  {`${messages.coffeeDetail.sold}: ${coffeeDetail.sell}`}
                </MediumText>
                <MediumText>
                  {`${messages.coffeeDetail.totalNumber}: ${coffeeDetail.amount}`}
                </MediumText>
                <MediumText>
                  {`${messages.coffeeDetail.numberLike}: ${coffeeDetail.number_like ?? 10}`}
                </MediumText>
                <MediumText>
                  {`${messages.coffeeDetail.weight}: ${coffeeDetail.weight}`}
                </MediumText>
                <MediumText>
                  {'Free ship : Free ship in since 15km'}
                </MediumText>
                <div className='flex text-[26px] gap-3'>
                  <div >
                    {messages.coffeeDetail.price}:
                  </div>
                  <div >
                    {`${numberWithCommas(coffeeDetail.price)} VNĐ`}
                  </div>
                </div>
                <div className='flex gap-15'>
                  <ButtonBasic onClick={buyCoffee} className={'w-2/3 h-50'}>
                    {messages.common.buyNow}
                  </ButtonBasic>

                  <Button type={1} className={'w-auto h-50 flex  items-center bg-amber-300'}>
                    {messages.common.addCart}
                    <ImageNext
                      width={40}
                      height={40}
                      src={images.icon.iconCart}
                    />
                  </Button>
                </div>
              </div>
            </div>
          </>

        )
      }
    </>

  )
}
export const getServerSideProps = async ({query})=>{

  const {param} = query

  return {props:{
    id:param[1],
    nameItem:param[0]
  }}
}
export default CoffeeDetail
