import React from "react";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 transition-colors">
      {/* Header */}
      <header className="w-full px-6 py-4 flex items-center justify-between shadow bg-white/80 dark:bg-gray-900/80 backdrop-blur z-10">
        <div className="text-2xl font-bold tracking-tight">Echo 4o Image</div>
        {/* 你可以在这里加导航 */}
      </header>
      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8">
        {children}
      </main>
      {/* Footer */}
      <footer className="w-full py-4 text-center text-gray-500 text-sm bg-white/60 dark:bg-gray-900/60">
        © {new Date().getFullYear()} Echo 4o Image. All rights reserved.
      </footer>
    </div>
  );
} 