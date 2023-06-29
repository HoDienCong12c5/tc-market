import { useQuery } from 'react-query'

const queryConfig = (arrKey, fuc, enabled = true, option = {}) => {
  const { data, isLoading } = useQuery(
    arrKey, fuc, {
      enabled: enabled,
      keepPreviousData: true,
      retry: 2, ...option
    }
  )
  return {
    isLoading,
    data,
  }
}

export default queryConfig
