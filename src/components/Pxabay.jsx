import React, { useContext } from 'react'
import ExampleContext from './Context/ExampleContext'

function Pxabay() {
    const {imageData, FilterCat,searchImageData,setSearchImageData} = useContext(ExampleContext);
  return (
    <>
    
    <div className='PixaimgBlocNavbar'>
        <button onClick={()=>FilterCat("backgrounds")}>Backgrounds</button>
        <button onClick={()=>FilterCat("fashion")}>fashion</button>
        <button onClick={()=>FilterCat("nature")}>nature</button>
        <button onClick={()=>FilterCat("science")}>science</button>
        <button onClick={()=>FilterCat("education")}>education</button>
        <button onClick={()=>FilterCat("feelings")}>feelings</button>
        <button onClick={()=>FilterCat("business")}>business</button>
    </div>
    <div>
        <input type="text" onChange={(e)=>setSearchImageData(e.target.value)} value={searchImageData} />
    </div>
    <div className='PixaimgBlockMain'>

        {imageData.map((data)=>
            <div key={data.id} className='PixaimgBlock'>
                 <img src={data.largeImageURL} alt="" /> 
            </div>
            
        )}
    </div>
    </>
  )
}

export default Pxabay