const ImageLink = () => {
    return (  
        <div>
        <p className="f3">
            {'This Magic box will detect faces in your picture'}
             </p>
            <div className="center">
                <div className="pa4 br3">
                    
                <input className="f4 pa2  w-70 center" type="tex" />
                <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
    
                </div>
           </div>  
       </div>
    );
}
 
export default ImageLink;