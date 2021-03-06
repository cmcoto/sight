import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Navbar from './Navbar'
import Footer from './Footer'
import { motion } from "framer-motion"
import Sidebar from './Sidebar'

const name = 'Carlos Coto'
export const siteTitle = 'Kinesiology Coto'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/images/manik.png" />
        <meta
          name="Kinesiology Coto"
          content="Kinesiology Praxis Clinic of Carlos Coto"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
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
              //className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/manik.png"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
      <motion.div whileHover={{ scale: 1.2 }} className={styles.backToHome} >
        <Link href="/">
          <a>??? Back to home</a>
        </Link>
      </motion.div>
      )}
      <Footer />
    </div>
  )
}
