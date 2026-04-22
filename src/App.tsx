import './App.css'

function App() {
  return (
    <div className="container">
      <header>
        <h1>Hiyolabo Control</h1>
        <p className="subtitle">Tauri v2 + React</p>
      </header>

      <main>
        <section className="status-panel">
          <div className="status-item">
            <span className="label">NVIDIA Fix:</span>
            <span className="value active">ENABLED</span>
          </div>
          <div className="status-item">
            <span className="label">Dual Window:</span>
            <span className="value active">ACTIVE</span>
          </div>
        </section>

        <section className="controls">
          <button onClick={() => window.location.reload()}>
            Reload Dashboard
          </button>
          <p className="hint">
            The left window displays <strong>hiyolabo.site</strong> directly via a native WebView.
          </p>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Hiyolabo Tauri Browser</p>
      </footer>
    </div>
  )
}

export default App
