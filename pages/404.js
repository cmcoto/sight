import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Navbar from '../components/Navbar'
import utilStyles from '../styles/utils.module.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function NotFound() {


const router = useRouter();

useEffect(() => {
    setTimeout(() => {
        router.push('/')
    }, 3000)
}, [])

  return (
    <Layout>
      <Head>
        <title>404</title>
      </Head>
    <div className="not-found"> 
    <section className={utilStyles.headingLg}>
        
        <h3>Ooops PAGE NOT FOUND!</h3>
        
        
    </section>
    </div> 
    </Layout>
  )
}