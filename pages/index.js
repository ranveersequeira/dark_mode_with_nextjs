import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Toggle from '../components/Toggler';
import { useDarkMode } from '../components/useDarkMode';

export default function Home() {
  const [theme, themeToggler] = useDarkMode();

  return (
    <div className={styles.container}>

    </div>
  )
}
