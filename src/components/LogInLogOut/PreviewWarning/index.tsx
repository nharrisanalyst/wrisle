import styles from './previewWarning.module.scss'

import { selectLoggedIn, LogStateType } from '../../../store/redux/slices/authSlice/authStore';


const PreviewWarning = ({loggedState}:{loggedState:LogStateType})=>{
    const preview = loggedState === "LOGGED_IN"?null:(<span className={styles.previewWarning}>preview</span>);
    return(
       <>
       {preview}
       </>
    )
}

export default PreviewWarning