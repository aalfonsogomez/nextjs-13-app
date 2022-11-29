import '../styles/globals.css'
import { Space_Grotesk } from '@next/font/google'
import { Navigation } from './components/navigation'

const font = Space_Grotesk({
  weights: ['400', '700']
})

export default function RootLayout ({ children }) {
  return (
    <html>
      <head>
        <title>My first App with Nextjs 13</title>
      </head>
      <body className={font.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
