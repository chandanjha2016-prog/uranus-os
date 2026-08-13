
export default function Home() {
  return (
    <div style={{background: 'linear-gradient(180deg, #81D4FA 0%, #29B6F6 50%, #0277BD 100%)', color: '#FFF', minHeight: '100vh', textAlign: 'center', padding: '60px 20px', fontFamily: 'Arial'}}>
      <h1 style={{fontSize: '60px'}}>URANUS OS 🔵</h1>
      <p style={{fontSize: '22px'}}>Ice Giant OS for Cryogenic Computing</p>
      <div style={{background: 'rgba(255,255,255,0.15)', padding: '20px', margin: '40px auto', borderRadius: '15px', maxWidth: '600px'}}>
        <h2>Core Temp: -224°C 🥶</h2>
        <p>Status: CRYOGENIC STABLE | Tilt: 98°</p>
      </div>
      <a href="/dashboard" style={{background: '#FFF', color: '#0277BD', padding: '15px 40px', borderRadius: '10px', textDecoration: 'none', fontWeight: 'bold'}}>Enter Ice Command</a>
    </div>
  )
}
