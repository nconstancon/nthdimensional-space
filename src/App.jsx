export default function App() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'
    }}>
      <section style={{ maxWidth: '840px', textAlign: 'center' }}>
        <h1 style={{ margin: 0, fontSize: 'clamp(2rem, 5vw, 3rem)' }}>Nth Dimensional Space</h1>
        <p style={{ marginTop: '1rem', color: '#444', lineHeight: 1.6 }}>
          A mathematical concept that extends familiar 1D, 2D, and 3D space by defining points as lists of "n" numbers (coordinates), where "n" is the dimension
        </p>
      </section>
    </main>
  );
}


