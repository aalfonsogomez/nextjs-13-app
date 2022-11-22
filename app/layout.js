import { Navigation } from './components/navigation'

export default function RootLayout ({ children }) {
  return (
    <html>
      <head>
        <title>My first App with Nextjs 13</title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
