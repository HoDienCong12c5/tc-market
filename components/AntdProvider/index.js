import React from 'react'
import { Button, ConfigProvider } from 'antd';

const AntdProvider = ({children}) => {
  return (
    <ConfigProvider

      // button={{
      //   style:{
      //     borderRadius:8,
      //     fontFamily:'URW DIN Arabic',
      //     fontWeight:400
      //   } ,
      // }}
      // form={{
      //   style:{
      //     border:0,
      //     padding:0,
      //     background:'transparent',
      //     backgroundColor:'transparent'
      //   }
      // }}
      // input={{
      //   style:{
      //     borderRadius:8,
      //     border:1,
      //     borderColor:'white'
      //   }
      // }}
      // modal={{
      //   style:{
      //     background:'rgb(28,31,37)',
      //     backgroundColor:'rgb(28,31,37)',
      //     borderRadius:16,
      //     border:'0px !important',
      //     borderColor:'white',
      //     padding:0
      //   }
      // }}
      // select={{
      //   style:{
      //     borderRadius:8,
      //     borderColor:'white',
      //     padding:0
      //   }
      // }}
      // menu={{
      //   style:{
      //     background:'transparent',
      //     backgroundColor:'transparent',
      //     border:0
      //   }
      // }}
    >
      {children}
    </ConfigProvider>
  )
}

export default AntdProvider
