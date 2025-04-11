import "./header.scss";
import PreviewWarning from "../LogInLogOut/PreviewWarning/index";
import  useStore  from '../../store/useStore';


const Header = () =>{
  const {isLoggedIn} = useStore();
 console.log('this is a test', isLoggedIn)
  const preview = isLoggedIn()?null:<PreviewWarning />;
  
  return(
    <div className="main-header">
      <span>
      {preview}  <span id='main-tagline'>Perception in Data </span>
      </span>
    </div>
  )
}


export default Header;