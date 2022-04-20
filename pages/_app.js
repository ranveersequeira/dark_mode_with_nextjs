import '../styles/globals.css'
import { useDarkMode } from '../components/useDarkMode';
import { GlobalStyles } from '../components/globalStyles';
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../components/Theme';
import Toggle from '../components/Toggler';
import styles from '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return <ThemeProvider theme={themeMode}>  <div className={styles.rightAbsolute}><Toggle theme={theme} toggleTheme={themeToggler} /> </div> <GlobalStyles /><Component {...pageProps} /> </ThemeProvider >
}

export default MyApp
