export function Footer() {
  return (
    <footer className="border-t border-gray-200/60 dark:border-white/10">
      <div className="container-max py-10 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500">© {new Date().getFullYear()} AIPOD Studio. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-black dark:hover:text-white">Twitter</a>
          <a href="/terms" className="hover:text-black dark:hover:text-white">Terms</a>
          <a href="/privacy" className="hover:text-black dark:hover:text-white">Privacy</a>
        </div>
      </div>
    </footer>
  )
}
