import Link from 'next/link'
import Image from 'next/image'
import { motion } from "framer-motion"
import { redirect } from 'next/dist/server/api-utils';

export default function Navbar() {
    return (
        <nav>
            <div className="logo">
                {/* <Image src="/images/manik.png" width= {50} height= {50}/> */}
            </div>
            <div>
            <Link href="/"><a>HOME</a></Link>
            <Link href="/about"><a>ABOUT</a></Link>
            <Link href="/coto"><a>Carlos Coto</a></Link>
            </div>
        </nav>
    );
  }