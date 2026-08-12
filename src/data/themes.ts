export interface Theme {
  id: string;
  name: string;
  colors: {
    bg: string;
    surface: string;
    border: string;
    accent: string;
    accentDim: string;
    text: string;
    muted: string;
  };
}

export const THEMES: Record<string, Theme> = {
  'midnight-gold': {
    id: 'midnight-gold',
    name: 'Midnight Gold',
    colors: {
      bg: '#0A0A0A',
      surface: '#141414',
      border: '#1E1E1E',
      accent: '#C9A84C',
      accentDim: '#8B6914',
      text: '#E8E0D0',
      muted: '#6B6560',
    },
  },
  'obsidian-emerald': {
    id: 'obsidian-emerald',
    name: 'Obsidian Emerald',
    colors: {
      bg: '#080C0A',
      surface: '#101614',
      border: '#18241F',
      accent: '#34D399',
      accentDim: '#059669',
      text: '#E2F1EC',
      muted: '#527A6D',
    },
  },
  'monochrome-silver': {
    id: 'monochrome-silver',
    name: 'Monochrome Silver',
    colors: {
      bg: '#0B0B0C',
      surface: '#161618',
      border: '#242428',
      accent: '#E2E8F0',
      accentDim: '#94A3B8',
      text: '#F8FAFC',
      muted: '#64748B',
    },
  },
};
