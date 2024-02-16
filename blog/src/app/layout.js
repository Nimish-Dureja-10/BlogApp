import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Blog App',
//   description: 'Blogify an application for blog writers and readers.',
// }

export const metadata = {
  title: {
    default : "Blog App",
    template : "%s"
  },
  description: "Blogify an application for blog writers and readers.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className='container'>
        <Navbar />
        {children}
        <Footer />
      </div>
      </body>
    </html>
  )
}
