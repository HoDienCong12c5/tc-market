import React from 'react'
import { useSelector } from 'react-redux';

const ModalBuy = ({coffee}) => {
  console.log({coffee});
  const messages = useSelector(state => state.app.language.messages)

  return (
    <div className='flex flex-col items-center gap-5'>
      <p className='text-26 mb-0'>
        {messages.coffeeDetail.modalBuy.titleOder}
      </p>
    </div>
  )
}

export default ModalBuy
