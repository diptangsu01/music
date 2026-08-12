import { usePlayer } from '../../contexts/PlayerContext';
import { ExternalLink, ChevronUp, ChevronDown, Music2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SpotifyEmbedPlayer() {
  const { activePlaylist, isPlayerExpanded, setIsPlayerExpanded } = usePlayer();

  if (!activePlaylist) {
    return null;
  }

  const embedUrl = `https://open.spotify.com/embed/playlist/${activePlaylist.id}?utm_source=generator&theme=0`;

  return (
    <div className="sticky top-[64px] z-30 w-full border-b border-[var(--color-border)] bg-[var(--color-surface)]/90 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        
        {/* Player Header Bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
              <Music2 className="h-4 w-4 animate-pulse" />
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-[10px] font-semibold tracking-widest text-[var(--color-accent)] uppercase">
                NOW PLAYING
              </span>
              <h3 className="font-display text-base font-medium text-[var(--color-text)] truncate">
                {activePlaylist.name}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={activePlaylist.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-bg)]/50 px-3 py-1 text-xs text-[var(--color-text-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-text)]"
            >
              <span className="hidden sm:inline">Open App</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>

            <button
              onClick={() => setIsPlayerExpanded(!isPlayerExpanded)}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg)]/50 text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
              aria-label={isPlayerExpanded ? 'Collapse player' : 'Expand player'}
            >
              {isPlayerExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Expandable Spotify Iframe Container */}
        <AnimatePresence>
          {isPlayerExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="spotify-embed-wrap mt-3 overflow-hidden"
            >
              <iframe
                src={embedUrl}
                width="100%"
                height="152"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title={`Spotify Player - ${activePlaylist.name}`}
                className="w-full rounded-xl shadow-lg border border-[var(--color-border)]"
              />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
