import Navbar from './components/layout/Navbar';
import AmbientBackground from './components/common/AmbientBackground';
import CategoryNav from './components/navigation/CategoryNav';
import PlaylistGrid from './components/playlists/PlaylistGrid';
import SpotifyEmbedPlayer from './components/player/SpotifyEmbedPlayer';
import Footer from './components/layout/Footer';
import { PlayerProvider } from './contexts/PlayerContext';
import { ThemeProvider } from './contexts/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <PlayerProvider>
        <div className="relative min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] font-body selection:bg-[var(--color-accent)] selection:text-[#0A0A0A]">
          {/* Ambient Glowing Background */}
          <AmbientBackground />

          {/* Top Sticky Header */}
          <Navbar />

          {/* Sticky Spotify Player */}
          <SpotifyEmbedPlayer />

          {/* Main Content Area */}
          <main className="relative z-10 py-6">
            {/* Category Navigation Pills */}
            <CategoryNav />

            {/* Grid of Curated Playlists */}
            <PlaylistGrid />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </PlayerProvider>
    </ThemeProvider>
  );
}
