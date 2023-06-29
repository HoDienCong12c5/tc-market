import { setModal } from '@/redux/slice/appSlice'
import React from 'react'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

const useModal = () => {
  const dispatch = useDispatch()

  const openModal = useCallback(
    ({
      content = () => <></>,
      width = 'auto',
      height = 'auto',
      radius = '10px',
      header = false,
      headerTitle = '',
      afterClose = null,
      background = '#ffffff',
      opacity = 1,
      boxShadow = null,
    }) => {
      dispatch(
        setModal({
          content,
          width,
          height,
          radius,
          background,
          headerTitle,
          header,
          afterClose,
          opacity,
          boxShadow,
          maskClosable:true,
          closable:true,
          keyboard:true
        })
      )
    },
    [dispatch]
  )

  const closeModal = useCallback(() => {
    dispatch(setModal(null))
  }, [dispatch])

  return {
    closeModal,
    openModal,
  }
}

export default useModal
