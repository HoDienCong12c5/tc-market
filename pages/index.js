import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';
import HomeScreen from './home';
const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  
`;
export default function Home() {
  return (
    <HomeScreen />
  )
}
