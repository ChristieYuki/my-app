import Sidebar from './components/sidebar'
import { NextPage } from 'next';
import { sleep } from './utils/sleep';
import React from 'react';
import CallToActionWithAnnotation from './layout/Hero';
import { Box } from '@chakra-ui/react';
import SidebarWithHeader from './components/sidebarWithHeader';
const title = "My title"

//Melhor para tipar!
const Home: NextPage = () => {
  return (
    <div>
      <Box bg={'blackAlpha.900'} color={'yellow.100'} width={'200px'} height={'max-content'}>
        <h1>Hello</h1>
        <Sidebar />
        <SidebarWithHeader children={title} />
        {/* <CallToActionWithAnnotation /> */}
      </Box >
    </div >
  )
}

export default Home;

// Notes:
// Melhor para tipar!
// const Home = () => {
//   return(
//     <div>
//       <h1>Hello</h1>
//     </div>
//   )
// }
// export default Home;

//Original Page 
// export default function Home() {
//   return (
//     <>
//       <body>
//         <Sidebar />
//       </body>
//     </>
//   )
// }
