import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/" prefetch={false}>Page A</Link>
          {' | '}
          <Link href="/b" prefetch={false}>Page B</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
