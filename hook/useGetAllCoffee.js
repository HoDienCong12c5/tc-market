
import { REACT_QUERY } from '@/common/constant'
import { FirebaseCoffee } from '@/utils/firebaseConfig'
import { useQuery } from '@tanstack/react-query'
const getAllData = async({ queryKey })=>{
  const pageSelect = queryKey[1]
  const data = await FirebaseCoffee.getDataLimit(pageSelect)
  return data ?? null
}
const useGetAllCoffee = (page = 1) => {
  const { isLoading, error, data } = useQuery(
    [REACT_QUERY.GET_ALL_COFFEE,page],
    getAllData
  )

  return {
    listAllNFT:data,
    loadingLitAllNFT:isLoading,
    errorLitAllNFT:error
  }
}

export default useGetAllCoffee
