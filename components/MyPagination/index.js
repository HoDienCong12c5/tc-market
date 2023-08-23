import { PAGE_SIZE_LIMIT } from '@/common/constant'
import { Pagination } from 'antd'
import React from 'react'

const MyPagination = ({
  totalItem,
  currentPage,
  onChange,
  defaultPageSize = PAGE_SIZE_LIMIT,
  showSizeChanger = false
}) => {
  return (
    totalItem <= 1 ? (
      <></>
    ) : (
      <Pagination
        showSizeChanger={showSizeChanger}
        pageSize={defaultPageSize}
        currentPage={currentPage}
        onChange={text=>onChange(text)}
        total={totalItem}
      />

    )
  )
}

export default MyPagination
