import { Footer } from '@/components/Footer'
import { MenuBar } from './Header'

// export function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <>
//       <div className="pointer-events-none fixed left-0 top-0 h-20 w-full bg-gradient-to-t from-white to-transparent dark:from-black"></div>
//       <div className="fixed inset-0 flex justify-center sm:px-8">
//         <div className="flex w-full max-w-7xl lg:px-8">
//           <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
//         </div>
//       </div>
//       <div className="relative flex min-h-screen w-full flex-col">
//         <div className="bg-background flex min-h-screen flex-col items-center justify-center p-4">
//           <MenuBar />
//         </div>
//         <main className="flex-auto">{children}</main>
//         <Footer />
//       </div>
//       {/* Fixed Gradient Background at Bottom */}
//       <div className="pointer-events-none fixed bottom-0 left-0 h-20 w-full bg-gradient-to-t from-white to-transparent dark:from-black"></div>
//     </>
//   )
// }


export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="from-background pointer-events-none fixed left-0 top-0 z-40 h-20 w-full bg-gradient-to-b to-transparent"></div>
      <div className="fixed inset-0 z-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative flex min-h-screen w-full flex-col">
        <MenuBar />
        <main className="flex-auto pt-16">{children}</main>
        <Footer />
      </div>
      {/* Fixed Gradient Background at Bottom */}
      <div className="to-background pointer-events-none fixed bottom-0 left-0 z-40 h-20 w-full bg-gradient-to-b from-transparent"></div>
    </>
  )
}
