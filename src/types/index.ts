/**
 * Spotify playlist categories supported by this site.
 * Extend this union to add new language categories — CategoryNav updates automatically.
 */
export type PlaylistCategory = 'english' | 'bengali' | 'hindi';

/**
 * A single playlist entry in the static config.
 * Playlist IDs are NOT secrets — they're part of the public Spotify URL.
 *
 * How to get your playlist ID:
 *   1. Open open.spotify.com and navigate to your playlist
 *   2. Click ⋯ → Share → Copy link to playlist
 *   3. URL format: https://open.spotify.com/playlist/{PLAYLIST_ID}
 *   4. Copy the ID (the part after /playlist/)
 */
export interface PlaylistConfig {
  /** Spotify playlist ID (alphanumeric, ~22 chars) */
  id: string;
  /** Display name shown on the card and player */
  name: string;
  /** Short description shown beneath the name */
  description: string;
  /** Language/mood category for filtering */
  category: PlaylistCategory;
  /** Direct Spotify URL for the "Open in Spotify" button */
  spotifyUrl: string;
  /**
   * Optional manual cover image URL.
   * Falls back to the oEmbed thumbnail if omitted.
   */
  coverUrl?: string;
}

/**
 * oEmbed response from open.spotify.com/oembed
 * Documented at: https://developer.spotify.com/documentation/embeds/tutorials/using-the-iframe-api
 */
export interface OEmbedResponse {
  type: string;
  version: string;
  title: string;
  description?: string;
  thumbnail_url: string;
  thumbnail_width: number;
  thumbnail_height: number;
  html: string;
  width: number;
  height: number;
  provider_name: string;
  provider_url: string;
}

/**
 * Resolved playlist data after oEmbed fetch.
 */
export interface ResolvedPlaylist extends PlaylistConfig {
  thumbnailUrl: string;
  displayTitle: string;
  embedUrl: string;
}
