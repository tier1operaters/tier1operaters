

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0F172A 0%, #1E40AF 60%, #38BDF8 100%)',
      color: '#F8FAFC',
      fontFamily: 'Inter, Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
      margin: 0,
    }}>
      <header style={{
        width: '100%',
        padding: '2rem 0',
        background: 'rgba(30,64,175,0.95)',
        textAlign: 'center',
        boxShadow: '0 4px 24px 0 rgba(31,38,135,0.18)',
        marginBottom: '2rem',
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 900,
          letterSpacing: '0.01em',
          color: '#38BDF8',
          margin: 0,
        }}>Get <span style={{color:'#F8FAFC'}}>Clean</span> <span style={{color:'#22C55E'}}>Windows</span></h1>
        <p style={{fontSize: '1.5rem', color: '#F8FAFC', marginTop: '0.5rem'}}>Premium Window Cleaning for Homes & Businesses</p>
      </header>
      <section style={{
        background: 'rgba(255,255,255,0.10)',
        borderRadius: '2rem',
        boxShadow: '0 8px 32px 0 rgba(31,38,135,0.18)',
        padding: '2.5rem 2rem',
        maxWidth: 600,
        margin: '2rem 0',
        textAlign: 'center',
      }}>
        <h2 style={{fontSize: '2rem', fontWeight: 700, color: '#38BDF8'}}>Why Choose Us?</h2>
        <ul style={{listStyle: 'none', padding: 0, margin: '1.5rem 0', color: '#F8FAFC', fontSize: '1.2rem'}}>
          <li>✓ Streak Free Guarantee</li>
          <li>✓ Eco Friendly Products</li>
          <li>✓ Fully Insured</li>
          <li>✓ Fast Scheduling</li>
        </ul>
        <a href="/estimate" style={{
          display: 'inline-block',
          background: 'linear-gradient(90deg, #38BDF8 60%, #22C55E 100%)',
          color: '#0F172A',
          fontWeight: 700,
          fontSize: '1.2rem',
          padding: '1rem 2.5rem',
          borderRadius: '1.5rem',
          textDecoration: 'none',
          marginTop: '1.5rem',
          boxShadow: '0 2px 12px 0 rgba(56,189,248,0.18)',
          transition: 'background 0.2s',
        }}>Get Instant Estimate</a>
      </section>
      <footer style={{
        width: '100%',
        padding: '2rem 0',
        background: 'rgba(15,23,42,0.98)',
        color: '#F8FAFC',
        textAlign: 'center',
        fontWeight: 600,
        letterSpacing: '0.02em',
        marginTop: '2rem',
      }}>
        © {new Date().getFullYear()} Get Clean Windows. All rights reserved.
      </footer>
    </main>
  );
}
