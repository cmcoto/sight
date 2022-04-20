import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Footer from './Footer'
import Navbar from './Navbar'
import { motion } from "framer-motion"
import Welcome from './Welcome'
import Sidebar from './Sidebar'


const name = 'Sight For Sore Eyes Blog'
export const siteTitle = 'Sight For Sore Eyes Blog'

export default function Layout({ children, home }) {
  return (
    
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/images/manik.png" />
        <meta
          name="Sight For Sore Eyes Blog"
          content="This is Sight For Sore Eyes Blog"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;500;600;700&display=swap');
        </style>
       
      </Head>
      <div>
      <Sidebar /> 
        
      </div>
      
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/manik.png"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading4XL}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
              <motion.div animate={{ color: 'red' }}
    transition={{ duration: 0.5 }} >
                <Image
                  priority
                  src="/images/manik.png"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </motion.div>
              </a>
            </Link>
            <h2 className={utilStyles.heading2XL}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
        <Welcome /> 
      </header>
     
      <main>{children}</main>
      {!home && (
      <motion.div whileHover={{ scale: 1.2 }}  className={styles.backToHome} >
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </motion.div>
      )}
      <Footer />
      
    </div>
    
  )
}
