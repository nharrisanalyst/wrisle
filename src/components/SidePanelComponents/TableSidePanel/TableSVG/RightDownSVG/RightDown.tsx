import arrowRight from './arrowRight.svg'
import './rightDown.scss';

const RightDown =({right}:{right:boolean})=>{
    const ArrowImage = right?(<img data-testid="right-arrow-id" src={arrowRight} className="arrow-side-panel" alt="arrow closed" />):(<img style={{"transform": "rotateZ(90deg)"}} data-testid="down-arrow-id" src={arrowRight} className="arrow-side-panel" alt="arrow open" />)
    return(
        <span className='arrow-d-u'>
          {ArrowImage}
        </span>
    )
}

export default RightDown;