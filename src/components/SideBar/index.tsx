import { Arrow } from '../Arrow'
import LogInButton from '../LogInButtons/Button'
import TableSideGlobal from '../SidePanelComponents/TableSidePanel/TableSidePanelGlobal';
import { useAppSelector } from '../../hooks/reduxHooks';
import { selectLoggedIn } from '../../store/redux/slices/authSlice/authStore';
import './SideBar.scss';


const SideBar = ()=>{
    const loggedState = useAppSelector(selectLoggedIn);
    const showLogIn = !(loggedState === "LOGGED_IN");
    return (
        <div className='side-panel'>
            <div className='side-panel-header'>WRISLE</div>
            <div className='side-panel-main'>
            <TableSideGlobal />
            </div>
            
            <div className='side-panel-footer'>
            <LogInButton title={"Upgrade/Log In"}  show={showLogIn}/>
               <div> about<Arrow /> </div>
            </div>
        </div>
    )
}

export default SideBar;