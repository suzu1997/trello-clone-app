import clsx from 'clsx'

import { CustomButton } from 'src/components/uiParts/Elements/CustomButton'

import type { FC } from 'react'

type PropsType = {
  primary?: boolean
}

export const Header: FC<PropsType> = ({ primary = true }) => {
  return (
    <header
      className={clsx(
        'flex h-11 items-center justify-between py-[6px] px-1',
        primary ? 'bg-[rgb(3,106,167)]' : 'bg-black',
      )}
    >
      <div className="flex items-center">
        <div>■</div>
        <div>アイコンです</div>
        <nav className="">
          <ul className="flex list-none">
            <li>ワークスペース</li>
            <li>最近</li>
            <li>スター付き</li>
            <li>もっと見る</li>
          </ul>
        </nav>
        <CustomButton />
      </div>
      <div className="flex items-center">
        <input type="text" placeholder="検索" />
        <div>ℹ️</div>
        <div>🔔</div>
        <div>◯</div>
      </div>
    </header>
  )
}
