# 🎧 music.diptangsu.in

> A minimalist, classy music portal designed for effortless listening across Mobile, Desktop, and Smart TVs.

`music.diptangsu.in` presents my personal Spotify playlists organized by language and mood, wrapped in a serene, luxury UI shell with zero bloat and zero friction.

---

## 🌟 Key Highlights

- **Zero-Secret Architecture**: Uses Spotify's public oEmbed API and Embed player — no API keys or backend server required.
- **Cross-Device Ready**: Optimized for touchscreens (mobile/tablet), mouse pointers (desktop), and 10-foot UI viewports (Smart TVs).
- **Classy Aesthetic**: Built around a **Midnight Gold** theme with soft serif typography (*Cormorant Garamond*) and a subtle hardware-accelerated ambient glowing background.
- **Language Categories**: Instant filtering across English, Bengali, and Hindi playlists.
- **Direct Spotify Deep Links**: Jump straight into the Spotify app with a single tap to save or follow playlists.
- **Cloudflare Pages Native**: Deploys as a 100% static SPA with pre-configured security headers, PWA support, and custom domain setup.

---

## 🏗 Architecture & Stack

```
music.diptangsu.in
├── React 19 + TypeScript 6 + Vite 8
├── Styling: TailwindCSS v4 + CSS Custom Properties Token System
├── Motion: Framer Motion (micro-animations, layout transitions)
├── Icons: Lucide React
└── Hosting: Cloudflare Pages (Custom Subdomain: music.diptangsu.in)
```

---

## 🛠 Local Development Setup

### Prerequisites
- Node.js `^20.0.0` or later
- `npm` or `pnpm`

### Steps
1. **Clone the repository:**
   ```bash
   git clone https://github.com/diptangsu01/music.git
   cd music
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

4. **Verify TypeScript & Linting:**
   ```bash
   npm run build
   ```

---

## 🎵 How to Add or Manage Playlists

All playlists live in a single config file: [`src/data/playlists.ts`](file:///e:/personal%20project/websites/Documents/Projects/Music/src/data/playlists.ts).

To add a new playlist:
1. Open Spotify and navigate to your playlist.
2. Click **⋯ (Share)** → **Copy link to playlist**.
3. Extract the ID from the URL (`https://open.spotify.com/playlist/{PLAYLIST_ID}`).
4. Add an entry to `PLAYLISTS`:

```typescript
{
  id: 'YOUR_PLAYLIST_ID',
  name: 'Playlist Title',
  description: 'A brief note on what this playlist feels like.',
  category: 'english', // 'english' | 'bengali' | 'hindi'
  spotifyUrl: 'https://open.spotify.com/playlist/YOUR_PLAYLIST_ID',
}
```

No API keys needed — metadata and artwork are automatically pulled via oEmbed!

---

## ☁️ Cloudflare Pages Hosting Guide

This repository is pre-configured for seamless Cloudflare Pages deployment.

### Initial Setup (Cloudflare Dashboard)
1. Push your code to GitHub (`github.com/diptangsu01/music`).
2. Log into the [Cloudflare Dashboard](https://dash.cloudflare.com).
3. Navigate to **Workers & Pages** → **Create Application** → **Pages** → **Connect to Git**.
4. Select the `music` repository.
5. Configure build settings:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
6. Click **Save and Deploy**.

### Custom Subdomain Setup (`music.diptangsu.in`)
1. In Cloudflare Pages, go to **Custom Domains** → **Add a custom domain**.
2. Type `music.diptangsu.in`.
3. Cloudflare will automatically set up the CNAME record in your DNS settings.
4. Your site will be live securely with automatic SSL!

---

## 🌿 Git Branching Strategy

This project follows a feature-branch workflow identical to the Portfolio repository:

- `main` — Production branch (auto-deployed by Cloudflare Pages)
- `develop` — Integration branch for testing upcoming features
- `feature/*` — Isolated feature branches (e.g., `feature/theme-system`, `feature/spotify-embed-player`)

---

## 🔒 Security & Privacy

- **No Tracker Scripts**: Zero analytics or intrusive trackers.
- **Content Security Policy**: Included in [`public/_headers`](file:///e:/personal%20project/websites/Documents/Projects/Music/public/_headers) to restrict iframe sources strictly to `open.spotify.com`.
- **No Credentials**: Pure client-side oEmbed protocol ensuring your personal API keys are never exposed.

---

## 👤 Author

**Diptangsu Sasmal**  
- Portfolio: [diptangsu.in](https://diptangsu.in)  
- GitHub: [@diptangsu01](https://github.com/diptangsu01)
