import { Arrow } from '../Arrow'
import './SideBar.scss';


const SideBar = ()=>{
    return (
        <div className='side-panel'>
            <div className='side-panel-header'>WRISLE</div>
            <div className='side-panel-main'></div>
            <div className='side-panel-footer'>about<Arrow /> </div>
        </div>
    )
}

export default SideBar;