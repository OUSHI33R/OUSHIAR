'use client'

import type * as React from 'react'
import { motion } from 'framer-motion'
import { Home, Settings, Bell, User } from 'lucide-react'
import { useTheme } from 'next-themes'
import { ThemeToggle } from './theme-toggle'
import { FaHome, FaInfoCircle, FaClipboardList, FaPhone } from 'react-icons/fa'

interface MenuItem {
  icon: React.ReactNode
  label: string
  href: string
  gradient: string
  iconColor: string
}

const menuItems: MenuItem[] = [
  {
    icon: <FaHome className="h-5 w-5" />,
    label: 'Home',
    href: '/',
    gradient:
      'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)',
    iconColor: 'text-blue-500',
  },
  {
    icon: <FaInfoCircle className="h-5 w-5" />,
    label: 'About',
    href: '/about',
    gradient:
      'radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)',
    iconColor: 'text-green-500',
  },
  {
    icon: <FaClipboardList className="h-5 w-5" />,
    label: 'Uses',
    href: '/uses',
    gradient:
      'radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)',
    iconColor: 'text-orange-500',
  },
  {
    icon: <FaPhone className="h-5 w-5" />,
    label: 'Contact',
    href: '/contact',
    gradient:
      'radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)',
    iconColor: 'text-red-500',
  },
]
const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
}

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
}

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: 'spring', stiffness: 300, damping: 25 },
    },
  },
}

const navGlowVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
}

const sharedTransition = {
  type: 'spring',
  stiffness: 100,
  damping: 20,
  duration: 0.5,
}

export function MenuBar() {
  const { theme } = useTheme()
  const isDarkTheme = theme === 'dark'

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 backdrop-blur-md ">
      <div className="mx-auto flex max-w-7xl items-center justify-center">
        {/* Logo/Site Title */}

        <div className="flex items-center gap-4">
          {/* Menu Navigation */}
          <motion.nav
            className="from-background/80 to-background/40 border-border/40 relative overflow-hidden rounded-2xl  bg-gradient-to-b p-2  backdrop-blur-lg"
            initial="initial"
            whileHover="hover"
          >
            <motion.div
              className={`bg-gradient-radial absolute -inset-2 from-transparent ${
                isDarkTheme
                  ? 'via-blue-400/30 via-purple-400/30 via-red-400/30 via-30% via-60% via-90%'
                  : 'via-blue-400/20 via-purple-400/20 via-red-400/20 via-30% via-60% via-90%'
              } pointer-events-none z-0 rounded-3xl to-transparent`}
              variants={navGlowVariants}
            />
            <ul className="relative z-10 flex items-center gap-2">
              {menuItems.map((item) => (
                <motion.li key={item.label} className="relative">
                  <motion.div
                    className="group relative block overflow-visible rounded-xl"
                    style={{ perspective: '600px' }}
                    whileHover="hover"
                    initial="initial"
                  >
                    <motion.div
                      className="pointer-events-none absolute inset-0 z-0"
                      variants={glowVariants}
                      style={{
                        background: item.gradient,
                        opacity: 0,
                        borderRadius: '16px',
                      }}
                    />
                    <motion.a
                      href={item.href}
                      className="text-muted-foreground group-hover:text-foreground relative z-10 flex items-center gap-2 rounded-xl bg-transparent px-4 py-2 transition-colors"
                      variants={itemVariants}
                      transition={sharedTransition}
                      style={{
                        transformStyle: 'preserve-3d',
                        transformOrigin: 'center bottom',
                      }}
                      
                    >
                      <span
                        className={`transition-colors duration-300 group-hover:${item.iconColor} text-foreground`}
                      >
                        {item.icon}
                      </span>
                      <span className="hidden sm:inline">{item.label}</span>
                    </motion.a>
                    <motion.a
                      href={item.href}
                      className="text-muted-foreground group-hover:text-foreground absolute inset-0 z-10 flex items-center gap-2 rounded-xl bg-transparent px-4 py-2 transition-colors"
                      variants={backVariants}
                      transition={sharedTransition}
                      style={{
                        transformStyle: 'preserve-3d',
                        transformOrigin: 'center top',
                        rotateX: 90,
                      }}
                    >
                      <span
                        className={`transition-colors duration-300 group-hover:${item.iconColor} text-foreground`}
                      >
                        {item.icon}
                      </span>
                      <span className="hidden sm:inline">{item.label}</span>
                    </motion.a>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.nav>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
