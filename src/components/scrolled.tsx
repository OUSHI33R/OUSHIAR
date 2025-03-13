'use client'
import { useEffect, useRef } from 'react'
import StarIcon from './StarIcon'

const words = ['Websites', 'Designing', 'Graphics', 'Animations', 'Community']

export default function ScrollingWords() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const speed = 1 // Adjust speed (smaller is slower)
    let scrollInterval: NodeJS.Timeout

    // Start scrolling
    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer) {
          scrollContainer.scrollLeft += speed
          if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
            scrollContainer.scrollLeft = 0 // Loop effect
          }
        }
      }, 20) // Adjust interval for smoothness
    }

    startScrolling()

    return () => clearInterval(scrollInterval) // Cleanup on unmount
  }, [])

  return (
    <div className="relative mt-16 w-full sm:mt-20">
      {/* Top & Bottom lines */}
      <div className="absolute left-0 right-0 top-0 h-[1px] bg-zinc-700 opacity-50"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-zinc-700 opacity-50"></div>

      <div className="-my-4 flex overflow-hidden py-6 sm:gap-8">
        {/* Gradient Fade Effect */}
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-between">
          <div className="h-full w-16 bg-gradient-to-r from-white to-transparent dark:from-black  sm:w-32"></div>
          <div className="h-full w-16 bg-gradient-to-l from-white to-transparent dark:from-black  sm:w-32"></div>
        </div>

        {/* Scrolling Text */}
        <div
          ref={scrollRef}
          className="scroll-container flex gap-8 whitespace-nowrap sm:gap-12"
          style={{ overflowX: 'hidden', scrollbarWidth: 'none' }}
        >
          {[...words, ...words].map((word, index) => (
            <span
              key={index}
              className="flex items-center gap-2 text-xl font-bold text-zinc-700 dark:text-zinc-400 sm:text-4xl"
            >
              <StarIcon className="ml-2 h-6 w-6 text-zinc-700 dark:text-zinc-400 sm:h-8 sm:w-8" />
              {word}
              <StarIcon className="mr-2 h-6 w-6 text-zinc-700 dark:text-zinc-400 sm:h-8 sm:w-8" />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
