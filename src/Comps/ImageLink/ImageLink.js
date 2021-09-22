import '../../App.css';
import './Image link.css';

const ImageLink = () => {
 return (
     <div>
         <p className='f3 center'>
             {'This magic brain will detect faces in your picture'}
         </p>
         <div className='center'>
             <div className='center'>
               <input className='f4 pa2 w-70 center' type='text'/>
                  <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button> 
              </div>
         </div>
     </div>
 )

};

export default ImageLink;