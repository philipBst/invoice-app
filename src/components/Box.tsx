import { forwardRef } from 'react'

import type { HTMLBlockElements } from '../types'

const Box = forwardRef(
  (
    {
      as,
      children,
      ...props
    }: React.PropsWithChildren<
      {
        as?: HTMLBlockElements
      } & React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
      >
    >,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => {
    const Box = as || 'div'
    return (
      <Box {...props} ref={ref}>
        {children}
      </Box>
    )
  },
)

export default Box
