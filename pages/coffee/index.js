import HeaderSeo from '@/components/HeaderSeo'
import Item from '@/components/Item'
import useGetAllCoffee from '@/hook/useGetAllCoffee'
import { FirebaseCoffee } from 'utils/firebaseConfig'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Media from 'react-media'
import MyPagination from '@/components/MyPagination'
import MyLoading from '@/components/MyLoading'
let arr = []
const Coffee = () => {
  const router = useRouter()
  const [pageSelected, setpageSelected] = useState(1)
  const {listAllNFT,loadingLitAllNFT,dataFilter} = useGetAllCoffee(pageSelected)
  console.log({listAllNFT,dataFilter});
  useEffect(() => {
    if(listAllNFT?.data?.length > 0){
      let arrKey = []
      listAllNFT?.data.forEach(item=>{
        arrKey.push(item.id)
      })
      arr = [
        ...arr,
        ...arrKey
      ]
      console.log({arr});
    }
  }, [listAllNFT])
  useEffect(() => {
    let i = 1
    const first = () => {
      setTimeout(() => {
        i++
        setpageSelected(i)
        first()
      }, 3000);
    }
    // first()
    console.log({process:process.env.NEXT_PUBLIC_DEV_TOOL});
  }, [])

  const clickItem = (item) => {
    router.push(`/coffee-detail/${item.name}/${item.id}`,null,{
      scroll:true
    })
  }
  const render = () => {
    return <div className='w-full pt-10'>
      <div className='grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-[15px] '>
        {
          listAllNFT?.data?.map(item =>{
            return <Item
              key={item?.id}
              item={item}
              onClick={()=>clickItem(item)}
            />
          })
        }
      </div>
      <MyPagination onChange={(page=>setpageSelected(page))} totalItem={listAllNFT?.total} currentPage={listAllNFT?.page} />
    </div>
  }
  return (
    <>
      <HeaderSeo
        title={'Tc Store | Cà phê Tây Nguyên'}
        description={'Tc Store | Cà phê Tây Nguyên'}
      />
      {
        loadingLitAllNFT ? (
          <MyLoading />
        ) : (
          render()
        )
      }

    </>

  )
}

export default Coffee
