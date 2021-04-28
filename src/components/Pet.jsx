import React from 'react'

export function Pet({name,photo,goToPetDetails,favourites,changeFavouritesState}) {
    return (
        <div className="ogolosh">
       <div style={{padding:5,paddingLeft:10}}>
       { !favourites &&  <svg onClick={changeFavouritesState}  style={{cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill='grey'><path d="M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379 4.246-3.611-2.625-3.612 2.625 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388 7.416 5.388-2.833-8.718 7.417-5.389h-9.167l-2.833-8.718z"/></svg>}
      { favourites && <svg onClick={changeFavouritesState}  style={{cursor:'pointer'}} xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="grey"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>}
     </div>
     <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',height:'70%',marginTop:'5%'}}>

     <img className="dogs" src={photo}/>

<div className="name">
   <h2>{name}</h2>
</div>
<div className="info" onClick={goToPetDetails}>
        <p >детальніше...</p>
     </div>
     </div>
        

     

    </div>
    )
}

