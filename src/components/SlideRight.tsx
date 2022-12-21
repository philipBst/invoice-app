import { useCallback } from 'react'
import classnames from 'classnames'

export type SlideRightProps = {
  open: boolean
  onClose?: () => void
}

const SlideRight: React.FC<React.PropsWithChildren<SlideRightProps>> = ({
  open,
  children,
  onClose,
}) => {
  const closeSlider = useCallback(() => {
    onClose?.()
  }, [onClose])

  return (
    <aside
      className={classnames(
        'w-full fixed top-0 bottom-0 right-0 z-20 transition-transform duration-300',
        {
          'translate-x-0': open,
          '-translate-x-full': !open,
        },
      )}
    >
      {children}
      <div
        className={classnames(
          'fixed top-0 z-[5] right-0 bottom-0 left-[35rem] transition-colors',
          {
            'bg-black/50 duration-1000': open,
            'bg-transparent duration-[0]': !open,
          },
        )}
        onClick={closeSlider}
      ></div>
    </aside>
  )
}

export default SlideRight
