'use client';
import { useEffect, useState } from 'react';

const TZ = 'Europe/Athens';

export default function Clock() {
  const [now, setNow] = useState(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const time = now?.toLocaleTimeString('en-GB', { timeZone: TZ, hour12: false }) ?? '--:--:--';
  const date = now?.toLocaleDateString('en-GB', { timeZone: TZ, weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) ?? '';

  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', textAlign: 'center' }}>
      <div>
        <h1 style={{ fontWeight: 400, margin: 0 }}>Current time in Greece</h1>
        <div style={{ fontSize: '6rem', fontVariantNumeric: 'tabular-nums', margin: '1rem 0' }}>{time}</div>
        <div style={{ fontSize: '1.4rem' }}>{date}</div>
        <div style={{ opacity: 0.7, marginTop: '.5rem' }}>Athens ({TZ})</div>
      </div>
    </main>
  );
}
