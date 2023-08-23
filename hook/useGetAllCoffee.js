
import { PAGE_SIZE_LIMIT, REACT_QUERY } from '@/common/constant'
import { FirebaseCoffee } from '@/utils/firebaseConfig'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
const getAllData = async({ queryKey })=>{
  const pageSelect = queryKey[1]
  const data = await FirebaseCoffee.getAllData()

  return data ?? null
}
const useGetAllCoffee = (pageSelected = 1) => {
  const { isLoading, error, data } = useQuery(
    [REACT_QUERY.GET_ALL_COFFEE,pageSelected],
    getAllData
  )
  const [dataFilter, setData] = useState({
    data:[],
    total:0,
    page:1,
    totalPage:1
  })
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
    if(data){
      let dataCoffee = {
        data:[],
        total:0,
        page:1,
        totalPage:1
      }
      let arrFilter = []
      data.forEach((coffee,index)=>{
        if(pageSelected === 1){
          if(index < PAGE_SIZE_LIMIT){
            arrFilter.push(coffee)
          }
        }else{
          if(index >= PAGE_SIZE_LIMIT * (pageSelected - 1) && index < PAGE_SIZE_LIMIT * pageSelected){
            arrFilter.push(coffee)
          }
        }
      })
      dataCoffee.data = arrFilter,
      dataCoffee.page = pageSelected
      dataCoffee.total = data.length

      if(data.length % PAGE_SIZE_LIMIT > 0){
        dataCoffee.totalPage = Math.floor(data.length / PAGE_SIZE_LIMIT) + 1
      }else{
        dataCoffee.totalPage = Math.floor(data.length / PAGE_SIZE_LIMIT)
      }
      setData(dataCoffee)
      setLoading(false)
    }
  }, [data])

  return {
    listAllNFT:dataFilter,
    loadingLitAllNFT:loading,
    errorLitAllNFT:error,
    dataFilter
  }
}

export default useGetAllCoffee
