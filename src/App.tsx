import DropZone from './components/DropZone';
import Header from './components/Header';
import SideBar from './components/SideBar';
import TableList  from './components/Table/TableList';
import './App.scss';

function App() {

  return (
    <div className='main-app'>
        <SideBar/>
        <div className='main-content'>
          <Header />
          <div className='main-panel'>
            <DropZone />
            <TableList />
          </div>
        </div>
    </div>
  )
}

export default App
