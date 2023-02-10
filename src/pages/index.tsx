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
      <Box bg={'#464343'} color={'#EAE7E6'} width={'200px'} height={'max-content'} padding={'13px'}>
        <Sidebar />
        {/* <CallToActionWithAnnotation /> */}
      </Box >
      <SidebarWithHeader children={title} />

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
