'use client'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

interface CursorProps {
  isActive?: boolean
}

export default function Cursor({ isActive }: CursorProps) {
  const mouse = useRef({ x: 0, y: 0 })
  const circle = useRef(null)
  const delayedMouse = useRef({ x: 0, y: 0 })
  const rafId = useRef(0)
  const [active, setActive] = useState(false)
  const size = isActive || active ? 100 : 12
  const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a

  const manageMouseMove = (e: { clientX: any; clientY: any }) => {
    const { clientX, clientY } = e

    mouse.current = {
      x: clientX,
      y: clientY,
    }
  }

  const animate = () => {
    const { x, y } = delayedMouse.current

    delayedMouse.current = {
      x: lerp(x, mouse.current.x, 0.075),
      y: lerp(y, mouse.current.y, 0.075),
    }

    moveCircle(delayedMouse.current.x, delayedMouse.current.y)

    rafId.current = window.requestAnimationFrame(animate)
  }

  const moveCircle = (x: number, y: number) => {
    gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 })
  }

  useEffect(() => {
    const links = document.querySelectorAll('a')
    const buttons = document.querySelectorAll('button')

    const onMouseEnterLink = (e: any) => {
      const link = e.target
      if (link.classList.contains('view')) {
        setActive(true)
      } else {
        setActive(true)
      }
    }

    const onMouseLeaveLink = (e: any) => {
      const link = e.target
      if (link.classList.contains('view')) {
        setActive(false)
      } else {
        setActive(false)
      }
    }

    links.forEach((link) => {
      link.addEventListener('mouseenter', onMouseEnterLink)
      link.addEventListener('mouseleave', onMouseLeaveLink)
    })

    buttons.forEach((button) => {
      button.addEventListener('mouseenter', onMouseEnterLink)
      button.addEventListener('mouseleave', onMouseLeaveLink)
    })
  })

  useEffect(() => {
    animate()
    window.addEventListener('mousemove', manageMouseMove)
    return () => {
      window.removeEventListener('mousemove', manageMouseMove)
      window.cancelAnimationFrame(rafId.current)
    }
  }, [isActive])

  return (
    <div className="relative hidden lg:block" id="custom-cursor">
      <div
        ref={circle}
        style={{
          width: size,
          height: size,
          transition: `height 0.3s ease-out, width 0.3s ease-out, filter 0.3s ease-out`,
        }}
        className="top-0 left-0 fixed rounded-full z-[100] bg-slate-200 pointer-events-none mix-blend-difference"
      ></div>
    </div>
  )
}
