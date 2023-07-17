import Head from 'next/head';
import styles from '../styles/Home.module.css';
import dynamic from 'next/dynamic';
import LayoutBox from '../components/nextjs-layout-box';

const Nav = dynamic(() => import('remote/Nav'), {
  ssr: false,
});

const Title = dynamic(() => import('remote/Title'), {
  ssr: false,
});

const links = [
  {url: "/", label: "Home"},
  {url: "https://nextjs.org/", label: "Learn more about Next.js"}
]

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js App</title>
        <meta name="description" content="Generated by Next.js App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutBox>        
          <Title title="This is Next.js Host App" />
          <Nav links={links} />    
      </LayoutBox>
    </div>
  );
}
