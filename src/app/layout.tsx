import { Container } from '@/common/container'
import './styles/globals.css'
import styles from "./styles/layout.module.css"

export const metadata = {
  title: 'Óptica Vitória',
  description: 'Veja melhor com o menor preço!",',
}

export default function RootLayout({ ...props }) {
  return (
    <html lang="en">
      <body>

        <Header />

        <main>
          {props.children}
        </main>

        <Nav />

      </body>
    </html>
  )
}

const Header = () => (
  <header className={styles.header} >
    <Container className={styles.headerContainer} >
      Óptica Vitória
    </Container>
  </header>
)

const Nav = () => (
  <nav className={styles.nav} >
    <Container className={styles.navContainer}>
      <a href="/">home</a>
      <a href="/clients">Clientes</a>
    </Container>
  </nav>
)