import "./header.scss";
import PreviewWarning from "../LogInLogOut/PreviewWarning/index";
import { useAppSelector } from '../../hooks/reduxHooks';
import { selectLoggedIn } from '../../store/redux/slices/authSlice/authStore';


const Header = () =>{
  const logState = useAppSelector(selectLoggedIn);
  return(
    <div className="main-header">
      <span>
      <PreviewWarning loggedState={logState} />  <span id='main-tagline'>Perception in Data </span>
      </span>
    </div>
  )
}


export default Header;