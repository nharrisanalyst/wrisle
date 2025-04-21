import { MouseEvent } from 'react';
import xImage from './x.svg';
import style from './close.module.scss';

type CloseProps={
    handleClose:(ev:MouseEvent<HTMLElement>)=>void;
}

const Close =({handleClose}:CloseProps)=>(
    <div>
        <button className={style.closeButton} onClick={handleClose}>
            <img src={xImage} className="close-img" alt="close-img" />
        </button>
    </div>
)

export default Close;
