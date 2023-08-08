import { FirebaseCoffee } from '@/utils/firebaseConfig';
import Head from 'next/head';
import React from 'react'

const CoffeeDetail = ({dataDetail,id,nameItem}) => {
  console.log({dataDetail,id,nameItem});

  return (
    <>
      <Head>
        <meta title={`TC-Store - ${nameItem}`} />
        <title>{`TC-Store - ${nameItem}`}</title>

      </Head>
      <div>CoffeeDetail</div>
    </>

  )
}
export const getServerSideProps = async ({query})=>{

  const {param} = query
  // const data = await FirebaseCoffee.getDataByID(param[1])

  return {props:{
    dataDetail:null,
    id:param[1],
    nameItem:param[0]
  }}
}
export default CoffeeDetail
