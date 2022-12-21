import { useCallback } from 'react'
import classnames from 'classnames'

export type SlideRightProps = {
  open: boolean
  onOpen?: () => void
  onClose?: () => void
}

const SlideRight: React.FC<React.PropsWithChildren<SlideRightProps>> = ({
  open,
  children,
  onClose,
}) => {
  const closeSlider = useCallback(() => {
    onClose?.()
  }, [])

  return (
    <aside
      className={classnames('w-full fixed top-0 bottom-0 z-10', {
        'left-0 bg-black/50': open,
        '-left-full bg-transparent': !open,
      })}
      onClick={closeSlider}
    >
      {children}
    </aside>
  )
}

export default SlideRight
