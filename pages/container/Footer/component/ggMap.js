import React from 'react'
import GoogleMapReact from 'google-map-react';
import Img from '@/common/images';
import ImageNext from '@/components/ImageNext';
import { Tooltip } from 'antd';
import { NormalText } from '@/components/TextSize';
const AnyReactComponent = ({ text }) => {
  return (
    <Tooltip title={<NormalText>TC Store</NormalText>}>
      <ImageNext width={30} height={30} loading='lazy' src={Img.footer.iconGPS} />
    </Tooltip>
  )
}
const GoogleMap = () => {
  const defaultProps = {
    center: {
      lat: 13.820217,
      lng: 107.751934
    },
    zoom: 10
  };

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_API_KEY_GG_MAP }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        zoom={15}
      >
        <AnyReactComponent
          lat={13.820217}
          lng={107.751934}
          text="TC Store"
        />
      </GoogleMapReact>
    </div>
  )
}

export default GoogleMap
