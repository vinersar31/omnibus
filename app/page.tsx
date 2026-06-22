'use client';

import { useEffect, useState } from 'react';

type AppItem = {
  id: string;
  label: string;
  href?: string;
  disabled?: boolean;
  badge?: string;
  gradient: string;
  shadow: string;
  hoverShadow: string;
  iconPath: string;
};

const DEFAULT_ITEMS: AppItem[] = [
  {
    id: 'portfolio',
    label: 'Portfolio',
    href: 'https://vinersardan.com',
    gradient: 'from-blue-500 to-indigo-600',
    shadow: 'shadow-indigo-500/30',
    hoverShadow: 'group-hover:shadow-indigo-500/50',
    iconPath:
      'M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75',
  },
  {
    id: 'loan_tracker',
    label: 'Loan Tracker',
    href: 'https://vinersar31.github.io/loan_tracker/',
    gradient: 'from-emerald-500 to-teal-600',
    shadow: 'shadow-emerald-500/30',
    hoverShadow: 'group-hover:shadow-emerald-500/50',
    iconPath:
      'M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  },
  {
    id: 'wealth',
    label: 'Wealth',
    disabled: true,
    badge: 'SOON',
    gradient: 'from-gray-400 to-gray-500',
    shadow: 'shadow-sm',
    hoverShadow: '',
    iconPath:
      'M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605',
  },
];

const STORAGE_KEY = 'omnibus-launcher-order';

function Tile({ item }: { item: AppItem }) {
  const content = (
    <>
      <div
        className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-br ${item.gradient} squircle shadow-lg ${item.shadow} flex items-center justify-center transition-all duration-200 ${item.hoverShadow} relative`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-10 h-10 sm:w-12 sm:h-12 text-white${item.disabled ? ' opacity-80' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
        </svg>
        {item.badge && (
          <div className="absolute -top-2 -right-2 bg-gray-800 text-white text-[10px] font-bold px-2 py-1 rounded-full border-2 border-[var(--background)]">
            {item.badge}
          </div>
        )}
      </div>
      <span
        className={`text-sm sm:text-base font-medium${item.disabled ? ' text-gray-500 dark:text-gray-400' : ''}`}
      >
        {item.label}
      </span>
    </>
  );

  if (item.disabled || !item.href) {
    return (
      <div className="group flex flex-col items-center gap-3 cursor-not-allowed opacity-60">
        {content}
      </div>
    );
  }

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      draggable={false}
      className="group flex flex-col items-center gap-3 transition-transform duration-200 hover:-translate-y-2 active:translate-y-0"
    >
      {content}
    </a>
  );
}

export default function Home() {
  const [items, setItems] = useState<AppItem[]>(DEFAULT_ITEMS);
  const [dragIndex, setDragIndex] = useState<number | null>(null);
  const [overIndex, setOverIndex] = useState<number | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return;
    try {
      const order: string[] = JSON.parse(saved);
      const byId = new Map(DEFAULT_ITEMS.map((i) => [i.id, i]));
      const reordered = order
        .map((id) => byId.get(id))
        .filter((i): i is AppItem => Boolean(i));
      const missing = DEFAULT_ITEMS.filter((i) => !order.includes(i.id));
      setItems([...reordered, ...missing]);
    } catch {
      /* ignore malformed saved order */
    }
  }, []);

  const persist = (next: AppItem[]) => {
    setItems(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next.map((i) => i.id)));
  };

  const handleDrop = (target: number) => {
    if (dragIndex === null || dragIndex === target) {
      setDragIndex(null);
      setOverIndex(null);
      return;
    }
    const next = [...items];
    const [moved] = next.splice(dragIndex, 1);
    next.splice(target, 0, moved);
    persist(next);
    setDragIndex(null);
    setOverIndex(null);
  };

  return (
    <main className="min-h-screen p-8 sm:p-12 md:p-24 flex flex-col items-center">
      <header className="w-full max-w-4xl flex justify-between items-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Omnibus</h1>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Launcher
        </div>
      </header>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-12 w-full max-w-4xl justify-items-center">
        {items.map((item, index) => (
          <div
            key={item.id}
            draggable
            onDragStart={(e) => {
              setDragIndex(index);
              e.dataTransfer.effectAllowed = 'move';
              // Required for the drag to actually start in Firefox/Safari.
              e.dataTransfer.setData('text/plain', item.id);
            }}
            onDragOver={(e) => {
              e.preventDefault();
              e.dataTransfer.dropEffect = 'move';
              if (overIndex !== index) setOverIndex(index);
            }}
            onDragEnter={(e) => {
              e.preventDefault();
              setOverIndex(index);
            }}
            onDragEnd={() => {
              setDragIndex(null);
              setOverIndex(null);
            }}
            onDrop={(e) => {
              e.preventDefault();
              handleDrop(index);
            }}
            className={`cursor-grab active:cursor-grabbing transition-all duration-200 ${
              dragIndex === index ? 'opacity-40 scale-95' : ''
            } ${
              overIndex === index && dragIndex !== null && dragIndex !== index
                ? 'scale-110'
                : ''
            }`}
          >
            <Tile item={item} />
          </div>
        ))}
      </div>
    </main>
  );
}
