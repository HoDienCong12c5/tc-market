
import { REACT_QUERY } from '@/common/constant'
import FirebaseService from '@/Services/FirebaseService'
import { useQuery } from '@tanstack/react-query'
const getAllData = async({ queryKey })=>{
  const pageSelect = queryKey[1]
  const data = await FirebaseService.coffeeShop.getLimit(pageSelect || 1)
  return data
}
const useGetAllCoffee = (page = 1) => {
  const { isLoading, error, data } = useQuery(
    [REACT_QUERY.GET_ALL_COFFEE,page],
    getAllData,
    { staleTime: 60000 }
  )

  return {
    listAllNFT:data,
    loadingLitAllNFT:isLoading,
    errorLitAllNFT:error
  }
}

export default useGetAllCoffee
