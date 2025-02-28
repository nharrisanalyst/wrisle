import Header from './components/Header';

import './App.scss';

function App() {

  return (
    <div className='main-app'>
        <div className='side-panel'></div>
        <div className='main-content'>
          <Header />
          <div className='main-panel'></div>
        </div>
    </div>
  )
}

export default App
