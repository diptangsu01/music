import { motion } from 'framer-motion';
import { ExternalLink, Play } from 'lucide-react';
import type { PlaylistConfig } from '../../types';
import { useOEmbed } from '../../hooks/useOEmbed';
import { usePlayer } from '../../contexts/PlayerContext';

interface PlaylistCardProps {
  playlist: PlaylistConfig;
}

export default function PlaylistCard({ playlist }: PlaylistCardProps) {
  const { activePlaylist, setActivePlaylist } = usePlayer();
  const { data: oEmbedData, loading } = useOEmbed(playlist.spotifyUrl);

  const isSelected = activePlaylist?.id === playlist.id;
  const thumbnailUrl = playlist.coverUrl || oEmbedData?.thumbnail_url || 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&auto=format&fit=crop&q=80';
  const displayTitle = oEmbedData?.title || playlist.name;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={`group relative flex flex-col overflow-hidden rounded-[var(--radius-card)] border bg-[var(--color-surface)] p-4 transition-all duration-300 ${
        isSelected
          ? 'border-[var(--color-accent)] shadow-[0_0_25px_var(--color-accent-glow)]'
          : 'border-[var(--color-border)] hover:border-[var(--color-border-alt)] hover:shadow-lg'
      }`}
    >
      {/* Cover Image Container */}
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-[var(--color-bg-alt)]">
        {loading ? (
          <div className="flex h-full w-full items-center justify-center bg-[var(--color-surface-alt)]">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--color-accent)] border-t-transparent" />
          </div>
        ) : (
          <img
            src={thumbnailUrl}
            alt={displayTitle}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        )}

        {/* Play Overlay Button */}
        <button
          onClick={() => setActivePlaylist(playlist)}
          className={`absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ${
            isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
          aria-label={`Play ${displayTitle}`}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent)] text-[#0A0A0A] shadow-xl transition-transform duration-200 hover:scale-110">
            <Play className="h-5 w-5 fill-current translate-x-0.5" />
          </div>
        </button>

        {/* Category Pill Tag */}
        <div className="absolute top-2 left-2 rounded-full border border-white/10 bg-black/60 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-[var(--color-text)] uppercase backdrop-blur-md">
          {playlist.category}
        </div>
      </div>

      {/* Info Section */}
      <div className="mt-4 flex flex-1 flex-col justify-between">
        <div>
          <h3 className="font-display text-lg font-semibold tracking-wide text-[var(--color-text)] line-clamp-1">
            {displayTitle}
          </h3>
          <p className="mt-1 text-xs text-[var(--color-text-muted)] line-clamp-2">
            {playlist.description}
          </p>
        </div>

        {/* Card Footer Actions */}
        <div className="mt-4 flex items-center justify-between border-t border-[var(--color-border)] pt-3">
          <button
            onClick={() => setActivePlaylist(playlist)}
            className="text-xs font-semibold text-[var(--color-accent)] hover:underline"
          >
            {isSelected ? 'Currently Playing' : 'Listen Now'}
          </button>

          <a
            href={playlist.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[11px] text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
            title="Open playlist in Spotify app"
          >
            <span>Spotify</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
