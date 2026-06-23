export default function Home() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#f30045', marginBottom: '2rem' }}>Welcome DevOps Class</h1>
      
      <section style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #eee', borderRadius: '8px' }}>
        <h2>Dashboard</h2>
        <p>Simple dashboard overview for pipeline your services.</p>
      </section>

      <section style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #eee', borderRadius: '8px' }}>
        <h2>Tech Stack</h2>
        <ul>
          <li>Next.js</li>
          <li>React</li>
          <li>Docker</li>
          <li>Jenkins</li>
        </ul>
      </section>

      <section style={{ padding: '1rem', border: '1px solid #eeeeee', borderRadius: '8px' }}>
        <h2>Jenkins Jobs</h2>
        <ul>
          <li>Build Job 1</li>
          <li>Test Job 1</li>
          <li>Deploy Job</li>
        </ul>
      </section>
    </main>
  );
}
