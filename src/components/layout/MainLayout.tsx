import type { ReactNode } from 'react'
import Navbar from './Navbar'

type Props = {
  children: ReactNode
}

export default function MainLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      <div style={{ padding: '20px' }}>
        {children}
      </div>
    </>
  )
}
