import { useState, useEffect } from 'react';
import type { OEmbedResponse } from '../types';

const cache = new Map<string, OEmbedResponse>();

/**
 * Hook to fetch Spotify oEmbed metadata without API keys/tokens.
 * Fully public, zero authentication endpoint.
 */
export function useOEmbed(spotifyUrl: string) {
  const [data, setData] = useState<OEmbedResponse | null>(cache.get(spotifyUrl) || null);
  const [loading, setLoading] = useState<boolean>(!cache.has(spotifyUrl));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (cache.has(spotifyUrl)) {
      setData(cache.get(spotifyUrl)!);
      setLoading(false);
      return;
    }

    let isMounted = true;
    const controller = new AbortController();

    async function fetchOEmbed() {
      try {
        setLoading(true);
        setError(null);
        const endpoint = `https://open.spotify.com/oembed?url=${encodeURIComponent(spotifyUrl)}`;
        const res = await fetch(endpoint, { signal: controller.signal });
        
        if (!res.ok) {
          throw new Error(`Failed to fetch oEmbed metadata: ${res.statusText}`);
        }

        const json: OEmbedResponse = await res.json();
        cache.set(spotifyUrl, json);

        if (isMounted) {
          setData(json);
          setLoading(false);
        }
      } catch (err: unknown) {
        if (err instanceof Error && err.name === 'AbortError') return;
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Unknown oEmbed error');
          setLoading(false);
        }
      }
    }

    fetchOEmbed();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [spotifyUrl]);

  return { data, loading, error };
}
