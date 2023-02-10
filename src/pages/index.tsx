import Sidebar from './components/sidebar'
import { NextPage } from 'next';
import { sleep } from './utils/sleep';
import React from 'react';
import CallToActionWithAnnotation from './layout/Hero';

//Melhor para tipar!
const Home: NextPage = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Sidebar />
      {/* <CallToActionWithAnnotation /> */}
    </div>
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
