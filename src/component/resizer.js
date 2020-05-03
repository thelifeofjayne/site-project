import React, { useContext } from 'react'
import { AppContext } from '../App'
import SVG from '../stuff/svg'

const Resizer = () => {
  const { explorerMinWidth, setExplorerWidth, explorerWidth, isMobileDevice } = useContext(AppContext)

  const startResize = (e) => {
    document.documentElement.style.cursor = 'w-resize'

    window.addEventListener('mousemove', Resize, false)
    window.addEventListener('mouseup', stopResize, false)

    e.target.addEventListener('touchmove', Resize, false)
    e.target.addEventListener('touchend', stopResize, false)
  }

  const Resize = (e) => {
    const currentX = isMobileDevice() ? (e.touches ? e.touches[0].clientX - 12 : e.clientX) : e.clientX
    if (currentX >= explorerMinWidth && currentX <= window.innerWidth * 0.75) setExplorerWidth(currentX)
    if (currentX < explorerMinWidth / 2) setExplorerWidth(0)
  }

  const stopResize = () => {
    document.documentElement.style.cursor = 'unset'

    window.removeEventListener('mousemove', Resize, false)
    window.removeEventListener('mouseup', stopResize, false)

    window.removeEventListener('touchmove', Resize)
    window.removeEventListener('touchend', stopResize, false)
  }

  return (
    <div className='resizer' onMouseDown={startResize} onDoubleClick={() => setExplorerWidth(explorerWidth === 0 ? explorerMinWidth : 0)}>
      {!isMobileDevice() ? null : (
        <div
          style={{
            marginBottom: 4,
          }}
        >
          {explorerWidth === 0 ? (
            <SVG name='expand' expand={() => setExplorerWidth(explorerMinWidth)} />
          ) : (
            <>
              <SVG
                style={{
                  marginLeft: -26,
                  marginRight: 2,
                }}
                name='minimize'
                minimize={() => setExplorerWidth(0)}
              />
              <SVG name='resize' resize={startResize} />
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default Resizer
