import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout_index'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { motion } from "framer-motion"
import { useLocomotiveScroll } from 'react-locomotive-scroll';



export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    <div className="Angebot">
      
    <section className={utilStyles.headingMd}>
        
        <br />
        <br />
        <div className="bigName">
          <div className="name-h1" data-scroll data-scroll-repeat data-scroll-call="toggleBackToTop" data-scroll-direction="horizontal" data-scroll-speed="4" data-scroll-position="top">
            <h1>Sight For Sore Eyes</h1>
          </div>
        </div>
        <motion.h2 data-scroll data-scroll-direction="horizontal" data-scroll-speed="6">By Carlos Coto</motion.h2>
        <br />
        <br />
        <br />
        <motion.p className="firstPhrase"
        whileInView="visible" 
        initial= {{backgroundColor: "none"}}
        animate={{
          
          backgroundColor: "yellow",
          boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
          position: "center",
          
          
        }}
        
        git branch
        
        transition = {{
          delay: 0.5
          
        }}

        
        
        whileInView= {{scale: [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1]}}
        data-scroll-target="#Angebot"
        ><strong>The Art Of Living A Miningful Life</strong>.
        </motion.p>
        <br />
        <br />
        <motion.p
        whileInView="visible" 
        initial= {{backgroundColor: "none"}}
        animate={{
          
          backgroundColor: "lightblue",
          boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
          position: "center",
          
        }}
        
        
        transition = {{
          delay: 1.5
          
          
        }}
        whileInView= {{scale: [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,1],
          rotate: 15
          
        }}
        
        style={{ originX: 0.3 }} ><strong>Deep</strong> describes what I do with: <strong>Kinesiology</strong>, <strong>Psychology</strong>, <strong>Hypnosis</strong>, <strong>Biomagnetism</strong>... for you:<strong>↓</strong></motion.p>
        <div className={utilStyles.grid} data-scroll  data-scroll-speed="5">
        
        <motion.p
        whileInView="visible" 
        initial= {{backgroundColor: "none"}}
        animate={{
          
          backgroundColor: "lightgreen",
          boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
          position: "center",
          
        }}
        
        
        transition = {{
          delay: 1.5
          
          
        }}
        whileInView= {{scale: [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,1],
          rotate: -15
          
        }}
        
        style={{ originX: 0.8 }} ><strong>Deep</strong> is the change obtained with: <strong>Kinesiology</strong>, <strong>Psychology</strong>, <strong>Hypnosis</strong>, <strong>Biomagnetism</strong>... in you:<strong>↓</strong></motion.p>
        <div className={utilStyles.grid} data-scroll  data-scroll-speed="5"></div>

        <motion.a animate={{boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)"}} 
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.1 },
        }}
        whileTap={{ scale: 0.9 }}
        href="/about" className={utilStyles.card} style={{backgroundColor: "#D8BFD8"}}>
        <h2>Hello</h2>
        <p>I'm a clinical Psychologist from El Salvador, Central America. Ex-Professor of Psychology for 13 years. My specialties are: Anxiety Disorders, Eating Disorders, Psycho-oncology, and Trauma.</p>
         <p> 
          <br />
          <strong>I also know:</strong>
          <li>Kinesiology</li>
         
          <li>NLP</li>
          <li>Ericksonian Hypnosis</li> 
          <li>Biomagnetism by Dr. Goiz</li>
        </p>
        </motion.a>
        
        
            <motion.a animate={{boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)"}} 
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.9 }}
            href="https://nextjs.org/docs" className={utilStyles.card} style={{backgroundColor: "#4682B4"}}>
              <h2>Kinesiology&rarr;</h2>
              <li>Applied Physiology</li>
              <li>Sport Kinesiology</li>
              <li>Neurokinesiology</li>
              <li>Touch For Health</li>
            </motion.a>

            <motion.a animate={{boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)"}} 
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.9 }}
            href="https://nextjs.org/learn" className={utilStyles.card} style={{backgroundColor: "#717CA3"}}>
              <h2>Psychology Counselling &rarr;</h2>
              <li>Anxiety Disorders</li>
              <li>Eating Disorders</li>
              <li>Trauma</li> 
              <li>Psychooncology</li> 
            </motion.a>

            <motion.a animate={{boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)"}} 
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/vercel/next.js/tree/master/examples" className={utilStyles.card} style={{backgroundColor: "#F0DFBD"}}>
              <h2>HandLink Technique &rarr;</h2>
              <p>I created HandLink Technique to be able to <strong>treat ANY</strong> negative emotion or negative thought</p>
            </motion.a>
            <motion.a animate={{boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)"}} 
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/vercel/next.js/tree/master/examples" className={utilStyles.card} style={{backgroundColor: "lightblue"}}>
              <h2>Biomagnetic Pairs from Dr. Isaac Goiz Durán&rarr;</h2>
              <p>I created HandLink Technique to be able to <strong>treat ANY</strong> negative emotion or negative thought</p>
            </motion.a>
          
        </div>
      </section>
    </div>

    <div className="bottomPage">
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
