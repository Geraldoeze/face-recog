import './Logo.css'
import Tilt from 'react-tilt'

const Logo = () => {
    return (
        <div  className='ma4 mt0'>
          <Tilt className="Tilt br2 shadow-2 " options={{ max : 25 }} style={{ height: 120, width: 100 }} >
            <div className="Tilt-inner pa3"> Brain image </div>
          </Tilt>    
        </div>
      );
}
 
export default Logo;
