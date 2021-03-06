import '../../App.css';
import './Image link.css';

const ImageLink = ( {onInputChange, onButtonSubmit}  ) => {
 return (
     <div>
         <p className='f3 center'>
             {'This magic brain will detect faces in your picture'}
         </p>
         <div className='center'>
             <div className='form center pa4 br3 shadows-5'>
               <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
                  <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onButtonSubmit}>Detect</button> 
              </div>
         </div>
     </div>
 )

};

export default ImageLink;