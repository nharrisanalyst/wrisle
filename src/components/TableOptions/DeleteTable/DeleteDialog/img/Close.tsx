import { MouseEvent } from 'react';
import xImage from './x.svg';

type CloseProps={
    handleClose:(ev:MouseEvent<HTMLElement>)=>void;
}

const Close =({handleClose}:CloseProps)=>(
    <div>
        <button onClick={handleClose}>
            <img src={xImage} className="close-img" alt="close-img" />
        </button>
    </div>
)

export default Close;
