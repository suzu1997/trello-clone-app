import { Header } from './Header'

import type { FC, ReactNode } from 'react'

type PropsType = {
  children: ReactNode
}

export const MainLayout: FC<PropsType> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}
