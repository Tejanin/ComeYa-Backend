import { Inter } from 'next/font/google'
import { Roboto } from "next/font/google";
import './globals.css'
import NavBar from '../components/NavBar/NavBar';
import { ChakraProvider } from '@chakra-ui/react'


const inter = Inter({ subsets: ['latin'] })

const roboto = Roboto ({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"]
})


export const metadata = {
  title: 'ComeYa',
  description: 'Pagina Web Ecommerce de comida, come ya!',
  keywords: "tienda, ecommerce, comida, pedidos, online"
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={roboto.className}>
        <NavBar />
        <ChakraProvider>
          {children}
        </ChakraProvider>
        </body>
    </html>
  )
}
