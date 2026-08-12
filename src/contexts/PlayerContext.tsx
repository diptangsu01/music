import React, { createContext, useContext, useState } from 'react';
import type { PlaylistConfig, PlaylistCategory } from '../types';
import { PLAYLISTS } from '../data/playlists';

interface PlayerContextType {
  activeCategory: PlaylistCategory | 'all';
  setActiveCategory: (cat: PlaylistCategory | 'all') => void;
  activePlaylist: PlaylistConfig | null;
  setActivePlaylist: (playlist: PlaylistConfig | null) => void;
  isPlayerExpanded: boolean;
  setIsPlayerExpanded: (expanded: boolean) => void;
  playlists: PlaylistConfig[];
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const PlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState<PlaylistCategory | 'all'>('all');
  const [activePlaylist, setActivePlaylist] = useState<PlaylistConfig | null>(PLAYLISTS[0] || null);
  const [isPlayerExpanded, setIsPlayerExpanded] = useState<boolean>(true);

  return (
    <PlayerContext.Provider
      value={{
        activeCategory,
        setActiveCategory,
        activePlaylist,
        setActivePlaylist,
        isPlayerExpanded,
        setIsPlayerExpanded,
        playlists: PLAYLISTS,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export function usePlayer() {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error('usePlayer must be used within a PlayerProvider');
  }
  return context;
}
