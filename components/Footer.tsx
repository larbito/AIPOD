export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="container-max py-8 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500">© {new Date().getFullYear()} AIPOD Studio. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:underline">Twitter</a>
          <a href="/terms" className="hover:underline">Terms</a>
          <a href="/privacy" className="hover:underline">Privacy</a>
        </div>
      </div>
    </footer>
  )
}
