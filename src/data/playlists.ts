import type { PlaylistConfig } from '../types';

/**
 * Curated playlist configuration.
 * Replace or extend playlist IDs with your own Spotify playlist IDs!
 *
 * How to get your playlist ID:
 *   1. Open open.spotify.com
 *   2. Navigate to your playlist
 *   3. Share -> Copy link to playlist
 *   4. Paste ID below (the string after /playlist/ and before ?)
 */
export const PLAYLISTS: PlaylistConfig[] = [
  // English Playlists
  {
    id: '37i9dQZF1DXcBWIGoYBM5M',
    name: 'Today\'s Top Hits',
    description: 'The hottest English tracks & chart toppers right now.',
    category: 'english',
    spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M',
  },
  {
    id: '37i9dQZF1DX0XUfTFmBDM0',
    name: 'Songs to Sing in the Car',
    description: 'Essential roadtrip & sing-along acoustic and pop tunes.',
    category: 'english',
    spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DX0XUfTFmBDM0',
  },
  {
    id: '37i9dQZF1DX4WYpdgoIcn6',
    name: 'Chill Hits',
    description: 'Kick back with peaceful, low-tempo chill pop and indie.',
    category: 'english',
    spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DX4WYpdgoIcn6',
  },

  // Bengali Playlists
  {
    id: '37i9dQZF1DXbL9TqdNqj2p',
    name: 'Hot Hits Bengali',
    description: 'The biggest and newest Bengali film & indie tracks.',
    category: 'bengali',
    spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DXbL9TqdNqj2p',
  },
  {
    id: '37i9dQZF1DWZBCo5tY2jH9',
    name: 'Rabindra Sangeet Melodies',
    description: 'Soulful classics and timeless Tagorean compositions.',
    category: 'bengali',
    spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DWZBCo5tY2jH9',
  },
  {
    id: '37i9dQZF1DX7Z37E2U2A8q',
    name: 'Bengali Retro & Classics',
    description: 'Golden era classics that evoke nostalgia.',
    category: 'bengali',
    spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DX7Z37E2U2A8q',
  },

  // Hindi Playlists
  {
    id: '37i9dQZF1DX0XUsUxW9L0M',
    name: 'Bollywood Butter',
    description: 'The most popular Bollywood hits and dance anthems.',
    category: 'hindi',
    spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DX0XUsUxW9L0M',
  },
  {
    id: '37i9dQZF1DX1i3yRjL5m17',
    name: 'Hindi Acoustic & Chill',
    description: 'Unplugged melodies, soft acoustics, and romantic tunes.',
    category: 'hindi',
    spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DX1i3yRjL5m17',
  },
  {
    id: '37i9dQZF1DX4858K5rm53T',
    name: '90s & 2000s Nostalgia',
    description: 'Evergreen Hindi classics from the golden eras of Bollywood.',
    category: 'hindi',
    spotifyUrl: 'https://open.spotify.com/playlist/37i9dQZF1DX4858K5rm53T',
  },
];
