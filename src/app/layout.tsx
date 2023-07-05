import './styles/globals.css'

import { Header } from './components/header'
import { Nav } from './components/nav'
import { Container } from '@/common/container'

export const metadata = {
  title: 'Óptica Vitória',
  description: 'Veja melhor com o menor preço!",',
}

export default function RootLayout({ children }: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body>

        <Header />

        <main>
          <Container>
            {children}
          </Container>
        </main>

        <Nav />

      </body>
    </html>
  )
}

