import { Palette } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import DSLogo from '../common/DSLogo';

export default function Navbar() {
  const { currentTheme, setThemeId, availableThemes } = useTheme();

  const cycleTheme = () => {
    const currentIndex = availableThemes.findIndex((t) => t.id === currentTheme.id);
    const nextIndex = (currentIndex + 1) % availableThemes.length;
    setThemeId(availableThemes[nextIndex].id);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur-xl transition-colors duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand / Logo */}
        <a 
          href="#" 
          className="group flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--color-accent)]/40 bg-[var(--color-surface)] text-[var(--color-accent)] shadow-sm transition-transform duration-300 group-hover:scale-105">
            <DSLogo size={22} className="text-[var(--color-accent)]" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg tracking-[0.2em] font-medium text-[var(--color-text)] uppercase sm:text-xl">
              DIPTANGSU
            </span>
            <span className="text-[10px] tracking-widest text-[var(--color-text-muted)] uppercase">
              Curated Sounds
            </span>
          </div>
        </a>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Theme Switcher Button */}
          <button
            onClick={cycleTheme}
            className="flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-xs text-[var(--color-text-muted)] transition-all hover:border-[var(--color-accent)]/50 hover:text-[var(--color-accent)] focus:outline-none"
            title={`Current Theme: ${currentTheme.name}. Click to change.`}
            aria-label="Toggle Theme"
          >
            <Palette className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">{currentTheme.name}</span>
          </button>

          {/* Direct Link to Spotify Profile */}
          <a
            href="https://open.spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[var(--color-accent)] px-4 py-1.5 text-xs font-semibold text-[#0A0A0A] shadow-sm transition-all hover:bg-[var(--color-accent)]/90 hover:shadow-md"
          >
            Open Spotify ↗
          </a>
        </div>

      </div>
    </header>
  );
}
