import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen p-8 sm:p-12 md:p-24 flex flex-col items-center">
      <header className="w-full max-w-4xl flex justify-between items-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Omnibus</h1>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Launcher
        </div>
      </header>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-12 w-full max-w-4xl justify-items-center">
        {/* Portfolio App Icon */}
        <Link
          href="/portfolio"
          className="group flex flex-col items-center gap-3 transition-transform duration-200 hover:-translate-y-2 active:translate-y-0"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-br from-blue-500 to-indigo-600 squircle shadow-lg shadow-indigo-500/30 flex items-center justify-center transition-all duration-200 group-hover:shadow-indigo-500/50">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
            </svg>
          </div>
          <span className="text-sm sm:text-base font-medium">Portfolio</span>
        </Link>

        {/* Loan Tracker App Icon */}
        <Link
          href="/loan_tracker"
          className="group flex flex-col items-center gap-3 transition-transform duration-200 hover:-translate-y-2 active:translate-y-0"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-br from-emerald-500 to-teal-600 squircle shadow-lg shadow-emerald-500/30 flex items-center justify-center transition-all duration-200 group-hover:shadow-emerald-500/50">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </div>
          <span className="text-sm sm:text-base font-medium">Loan Tracker</span>
        </Link>

        {/* Wealth App Icon (Coming Soon) */}
        <div className="group flex flex-col items-center gap-3 cursor-not-allowed opacity-60">
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-br from-gray-400 to-gray-500 squircle shadow-sm flex items-center justify-center relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 sm:w-12 sm:h-12 text-white opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
            </svg>
            <div className="absolute -top-2 -right-2 bg-gray-800 text-white text-[10px] font-bold px-2 py-1 rounded-full border-2 border-[var(--background)]">
              SOON
            </div>
          </div>
          <span className="text-sm sm:text-base font-medium text-gray-500 dark:text-gray-400">Wealth</span>
        </div>
      </div>
    </main>
  );
}
