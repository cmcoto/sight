import React, { useState, useEffect } from 'react';
import '../styles/global.css'
import styles from '../components/sidebar.css'
import { ChakraProvider } from '@chakra-ui/react'



function MyApp({ Component, pageProps }) {
  useEffect(() => {
    
      let scroll;
      import("locomotive-scroll").then((locomotiveModule) => {
          scroll = new locomotiveModule.default({
              el: document.querySelector("[data-scroll-container]"),
              smooth: true,
              smoothMobile: false,
              resetNativeScroll: true
          });
      });

      // `useEffect`'s cleanup phase
      return () => scroll.destroy();
     
  });
  
  return (
    
    <div id="outer-container">
        <const Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
        <main id= "page-wrap" className="main" data-scroll-container>
            
        <ChakraProvider>
            <layout>
                <Component {...pageProps} />
            </layout>
        </ChakraProvider>
            
        </main>
    </div>
  );
}

export default MyApp;