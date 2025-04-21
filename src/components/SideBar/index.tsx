import { Arrow } from '../Arrow'
import Button from '../LogInButtons/Button'
import TableSideGlobal from '../SidePanelComponents/TableSidePanel/TableSidePanelGlobal';
import './SideBar.scss';


const SideBar = ()=>{
    return (
        <div className='side-panel'>
            <div className='side-panel-header'>WRISLE</div>
            <div className='side-panel-main'>
            <TableSideGlobal />
            </div>
            
            <div className='side-panel-footer'>
            <Button title={"Upgrade/Log In"} />
               <span> about<Arrow /> </span>
            </div>
        </div>
    )
}

export default SideBar;