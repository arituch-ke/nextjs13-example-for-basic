import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';

interface IProps {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Example App',
}

export default function RootLayout({ children }: IProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
