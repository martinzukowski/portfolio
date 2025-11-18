'use client'

import { useEffect, useRef } from 'react'
import styles from './StarBackground.module.css'

interface Star {
  x: number
  y: number
  radius: number
  vx: number
  vy: number
  opacity: number
  twinkleSpeed: number
}

export default function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Create stars
    const stars: Star[] = []
    const numStars = 150

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        opacity: Math.random(),
        twinkleSpeed: Math.random() * 0.02 + 0.01,
      })
    }

    let twinklePhase = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      twinklePhase += 0.01

      stars.forEach((star) => {
        // Update position
        star.x += star.vx
        star.y += star.vy

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width
        if (star.x > canvas.width) star.x = 0
        if (star.y < 0) star.y = canvas.height
        if (star.y > canvas.height) star.y = 0

        // Twinkling effect
        star.opacity = 0.5 + Math.sin(twinklePhase * 10 + star.x * 0.01 + star.y * 0.01) * 0.5

        // Draw star with glow
        if (star.radius > 1) {
          ctx.beginPath()
          ctx.arc(star.x, star.y, star.radius * 2.5, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * 0.2})`
          ctx.fill()
        }

        // Draw main star
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fill()
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className={styles.canvas} />
}

