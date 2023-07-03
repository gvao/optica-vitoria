import './styles/globals.css'

export const metadata = {
  title: 'Óptica Vitória',
  description: 'Veja melhor com o menor preço!",',
}

export default function RootLayout({ ...props }) {
  return (
    <html lang="en">
      <body>

        <main>
          {props.children}
        </main>

        <Nav />

      </body>
    </html>
  )
}

const Nav = () => (
  <nav>
    nav...
  </nav>
)