import { motion } from 'framer-motion';
import { usePlayer } from '../../contexts/PlayerContext';
import type { PlaylistCategory } from '../../types';

interface CategoryOption {
  id: PlaylistCategory | 'all';
  label: string;
}

const CATEGORIES: CategoryOption[] = [
  { id: 'all', label: 'All Playlists' },
  { id: 'english', label: 'English' },
  { id: 'bengali', label: 'Bengali' },
  { id: 'hindi', label: 'Hindi' },
];

export default function CategoryNav() {
  const { activeCategory, setActiveCategory } = usePlayer();

  return (
    <nav className="my-6 flex items-center justify-center">
      <div className="no-scrollbar flex max-w-full items-center gap-2 overflow-x-auto rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/60 p-1.5 backdrop-blur-md">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative rounded-full px-5 py-2 text-xs font-medium tracking-wider uppercase transition-colors duration-200 focus:outline-none ${
                isActive
                  ? 'text-[#0A0A0A]'
                  : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeCategoryIndicator"
                  className="absolute inset-0 rounded-full bg-[var(--color-accent)] shadow-sm"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
