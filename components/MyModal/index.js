import { lazy, Suspense } from 'react'


import { Modal, Spin } from 'antd'
import { useSelector } from 'react-redux'
import useModal from '@/hook/useModal'
// import images from 'utils/images'

const ModalWrapper = () => {
  // Get modal params from redux store
  const modal = useSelector((state) => state.app.modal)
  const {closeModal} = useModal()
  // Import dynamic component according to component path param
  const CustomComponent = lazy(() => import(`${modal.componentPath}`))

  const defaultModalConfig = {
    wrapClassName: '',
    maskClosable: true,
    isDisableIcon: false,
    closable: true,
    maskStyle: {},
    title: null,
    footer: null
  }

  return (

    <Modal
      {...defaultModalConfig}
      {...modal}
      centered
      style={{minWidth:520}}
      open={!!modal}
      onCancel={closeModal}
      // closeIcon={<img src={images.icClose} />}
    >
      <Suspense fallback={<Spin />}>
        {
          modal?.componentPath
            ? (
              <CustomComponent {...modal.componentProps} />
            )
            : (
              modal?.content
            )
        }
      </Suspense>
    </Modal>
  )
}
export default ModalWrapper
