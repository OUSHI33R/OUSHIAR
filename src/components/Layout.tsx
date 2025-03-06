import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="pointer-events-none fixed top-0 left-0 h-20 w-full bg-gradient-to-t from-white to-transparent dark:from-black"></div>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative flex min-h-screen w-full flex-col">
        <Header />
        <main className="flex-auto">{children}</main>
        <Footer />
      </div>
      {/* Fixed Gradient Background at Bottom */}
      <div className="pointer-events-none fixed bottom-0 left-0 h-20 w-full bg-gradient-to-t from-white to-transparent dark:from-black"></div>
    </>
  )
}
