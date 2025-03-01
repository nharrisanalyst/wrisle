import arrowLogo from './arrow.svg'
import './Arrow.scss';

export const Arrow =()=>(
    <span className='arrow-img'>
        <img src={arrowLogo} className="arrow-up" alt="arrow up" />
    </span>
)