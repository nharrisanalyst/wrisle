import DropZone from './components/DropZone';
import Header from './components/Header';
import SideBar from './components/SideBar';
import './App.scss';

function App() {

  return (
    <div className='main-app'>
        <SideBar/>
        <div className='main-content'>
          <Header />
          <div className='main-panel'>
            <DropZone />
          </div>
        </div>
    </div>
  )
}

export default App
