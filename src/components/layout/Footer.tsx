export default function Footer() {
  return (
    <footer className="w-full border-t border-[var(--color-border)] bg-[var(--color-bg)] py-8 text-center text-xs text-[var(--color-text-muted)]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="font-display text-sm tracking-widest uppercase">
          © {new Date().getFullYear()} DIPTANGSU CHAKRABORTY · ALL RIGHTS RESERVED
        </p>
        <p className="text-[11px] text-[var(--color-text-faint)]">
          Powered by Spotify oEmbed · Hosted on Cloudflare Pages
        </p>
      </div>
    </footer>
  );
}
