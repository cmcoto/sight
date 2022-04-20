import Link from 'next/link'
import styles from './layout.module.css'
import { motion } from "framer-motion"




export default function Welcome() {
    return (
    <div className="Welcome">
        <h3>
           Welcome to Sight For Sore Eyes Blog, the blog of <Link href="/about"><a>Carlos Coto</a></Link>
        </h3>
        
        
        <motion.p className={styles.center} whileInView={{ opacity: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1] }} transition = {{
          delay: 2.0,
          ease: "easeOut",
          duration: 2
        }} animate={{ y: 100, scale: 2.0 }}>Scroll</motion.p>
        <motion.h1 className={styles.center}  whileInView={{ opacity: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1] }} transition = {{
          delay: 2.0,
          ease: "easeOut",
          duration: 2
        }} animate={{ y: 100, scale: 2.0 }}
        >↓</motion.h1>
    </div>
    );
  }