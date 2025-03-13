import { Button } from './ui/button'

export default function CTASection() {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center rounded-3xl bg-gray-100 px-4 py-20 text-[#111116] transition-colors duration-300 dark:bg-[#111116] dark:text-white">

      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center text-center">
        <div className="mb-8 inline-flex items-center rounded-full border border-green-600 bg-green-100 px-4 py-2 dark:border-green-500 dark:bg-green-300/10">
          <span className="relative mx-2 flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
          </span>
          <span className="text-sm font-medium">Available for work</span>
        </div>

        <h1 className="mb-12 text-5xl font-bold tracking-tight md:text-7xl">
          Let&apos;s create your
          <br />
          next big idea.
        </h1>

        <Button className="rounded-full bg-[#111116] px-8 py-3 font-medium text-white transition-colors hover:bg-black dark:bg-white dark:text-black dark:hover:bg-gray-100">
          Contact Me
        </Button>
      </div>
    </div>
  )
}
