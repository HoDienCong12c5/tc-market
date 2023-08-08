import { FirebaseCoffee } from '@/utils/firebaseConfig';
import React from 'react'

const CoffeeDetail = ({dataDetail,id,keyFirebase}) => {
  console.log({dataDetail,id,keyFirebase});

  return (
    <div>CoffeeDetail</div>
  )
}
export const getServerSideProps = async ({query})=>{

  const {param} = query
  const data = await FirebaseCoffee.getDataByID(param[1])

  return {props:{
    dataDetail:data,
    id:param[1],
    keyFirebase:param[0]
  }}
}
export default CoffeeDetail
