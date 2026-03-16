import './App.css'
import RootRouter from './routes/RootRouter'
import GlobalStyle from './components/GlobalStyle'

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <RootRouter />
      </div>
    </>
  )
}

export default App
