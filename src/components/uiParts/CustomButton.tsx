import { cloneElement, forwardRef } from 'react'

import { Button as MantineButton } from '@mantine/core'

import type { ButtonProps } from '@mantine/core'

/**
 * MantineのButtonコンポーネントをカスタマイズしたコンポーネント.
 * @remarks カスタマイズしたコンポーネントは、クリック時に凹ませるかを指定できる。
 */
// NOTE: forwardRef... コンポーネントにrefを渡すために必要 https://zenn.dev/terrierscript/scraps/15ca11388f7424
const CustomButton = forwardRef<
  HTMLButtonElement, // refの対象
  ButtonProps<'button' | 'a'> & { dent?: boolean } // props
>(({ sx, dent, ...props }, ref) => {
  // NOTE: cloneElement ... element から新しい React 要素を複製して返す。元の要素の props に新しい propsを浅くマージ
  // https://ja.reactjs.org/docs/react-api.html#cloneelement
  return cloneElement(<MantineButton />, {
    // Mantineは sx Propでスタイル定義 https://mantine.dev/theming/sx/
    sx: {
      ...sx,
      '&:not(:disabled):active': dent ? undefined : { transform: 'none' }, 
    },
    ref,
    ...props,
  })
})

export default CustomButton
