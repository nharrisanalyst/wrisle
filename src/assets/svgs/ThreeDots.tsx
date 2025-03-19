import { MouseEvent } from 'react';
import threeDots from './threeDots.svg';

type ThreeDotsProps = {
  onClick:(ev:MouseEvent<HTMLElement>)=>void;
}

export const ThreeDots =({onClick}:ThreeDotsProps)=>(
    <span onClick={onClick} className='three-dots-img'>
      <img src={threeDots} className="three-dots-svg-img" alt="three dots svg" />
    </span>
)