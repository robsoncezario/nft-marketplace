import React, {
  useRef,
  useEffect
} from 'react'
import Portal from '../Portal/index'
import {
  Overlay,
  Wrapper
} from './styles'

export default function TransitionModal({ 
  open, 
	align = 'center',
  onClose, 
  children 
}) {
  const elRef = useRef(null)

  const handleClickOutside = (event) => {
    if (elRef.current && !elRef?.current?.contains(event.target)) {
      onClose()
    }
  }

  const bindEvents = () => {
    if (open) {
      document.addEventListener('mousedown', handleClickOutside, true)
    } else {
      document.removeEventListener('mousedown', handleClickOutside, true)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true)
    }
  }

  useEffect(bindEvents, [open])

  return (
    <Portal>
      <Overlay open={open} align={align}>
        <Wrapper ref={elRef} open={open}>
          {children}
        </Wrapper>
      </Overlay>
    </Portal>
  )
}