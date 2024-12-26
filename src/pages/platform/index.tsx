import Layout from "@theme/Layout";
import { useRef } from "react";
import { motion } from "framer-motion";
import styles from './styles.module.css'
import { Platforms } from "@site/data/platform";
import PlatformCard from "./_components/PlatformCard";

const TITLE='我的平台';
const DESCRIPTION = ''

const PlatformCards=()=>{
  const platforms = Platforms

  return (
    <section className="margin-top--lg margin-bottom--lg">
      <div className={styles.friendContainer}>
        <ul className={styles.friendList}>
          {platforms.map(platform => (
            <PlatformCard key={platform.avatar} platform={platform} />
          ))}
        </ul>
      </div>
    </section>
  )
}

const Header = () => {
  return (
    <section className="margin-top--lg margin-bottom--lg text--center">
      <h1>{TITLE}</h1>
      <p>{DESCRIPTION}</p>
    </section>
  )
}

const PlatformLink = () => {
  const ref = useRef<HTMLDivElement>(null);


  return (
    <Layout ref={ref} title={TITLE} description={DESCRIPTION}>
      <motion.main ref={ref} className="margin-vert--md">
        <Header />
        <PlatformCards />
        <motion.div drag dragConstraints={ref} className={styles.dragBox}>
        </motion.div>
      </motion.main>
    </Layout>
    );
};

export default PlatformLink;
