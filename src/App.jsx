import './App.css'

const calculators = [
  {
    id: 'invest-or-payoff',
    title: 'Invest or Payoff',
    description: 'Should you invest extra money or pay down your loan faster? Compare three scenarios to find the best strategy.',
    url: 'https://invest-or-payoff.numberswontlie.com',
    color: '#BAE1FF'
  }
  // More calculators will be added here
];

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="title">Numbers Won't Lie</h1>
        <p className="subtitle">Smart financial calculators to help you make better money decisions</p>
      </header>

      <main className="main">
        <div className="calculators-grid">
          {calculators.map((calc) => (
            <a
              key={calc.id}
              href={calc.url}
              className="calculator-card"
              style={{ borderColor: calc.color }}
            >
              <div className="card-content">
                <h2 className="card-title">{calc.title}</h2>
                <p className="card-description">{calc.description}</p>
              </div>
              <div className="card-footer">
                <span className="card-link">Open Calculator →</span>
              </div>
            </a>
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>
          Built by <a href="https://www.rayuduramisetti.com" target="_blank" rel="noopener noreferrer" className="footer-link">Rayudu Ramisetti</a>
        </p>
      </footer>
    </div>
  )
}

export default App
