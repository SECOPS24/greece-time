export const metadata = { title: 'Time in Greece' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif', background: '#0d5eaf', color: '#fff' }}>
        {children}
      </body>
    </html>
  );
}
