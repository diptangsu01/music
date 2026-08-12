import { motion } from 'framer-motion';
import { usePlayer } from '../../contexts/PlayerContext';
import PlaylistCard from './PlaylistCard';

export default function PlaylistGrid() {
  const { playlists, activeCategory } = usePlayer();

  const filteredPlaylists = activeCategory === 'all'
    ? playlists
    : playlists.filter((p) => p.category === activeCategory);

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="font-display text-2xl font-light tracking-wide text-[var(--color-text)] sm:text-3xl">
            {activeCategory === 'all' ? 'Featured Collections' : `${activeCategory.toUpperCase()} PLAYLISTS`}
          </h2>
          <p className="mt-1 text-xs text-[var(--color-text-muted)]">
            Handpicked sounds directly synced from Spotify
          </p>
        </div>
        <span className="text-xs font-mono text-[var(--color-text-faint)]">
          {filteredPlaylists.length} PLAYLISTS
        </span>
      </div>

      {filteredPlaylists.length === 0 ? (
        <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-12 text-center text-sm text-[var(--color-text-muted)]">
          No playlists found in this category.
        </div>
      ) : (
        <motion.div 
          layout
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
        >
          {filteredPlaylists.map((playlist) => (
            <PlaylistCard key={playlist.id} playlist={playlist} />
          ))}
        </motion.div>
      )}
    </section>
  );
}
