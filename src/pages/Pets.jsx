import React, { useEffect, useMemo, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { Pet } from '../components/Pet'


export const Pets = ({favouritesMode}) => {
    const history = useHistory()
    const [pets,setPets] = useState([])
    useEffect(() => {
     const petData =   JSON.parse(localStorage.getItem('pets'))
     setPets(petData)
    }, [])
    const petContent = useMemo(
        () => {
            if(!pets.length)
            return []
            let tempArray = [...pets]
            const formattedContent = []
            while(tempArray.length > 0) {
              formattedContent.push(tempArray.splice(0,3))
            }
            return formattedContent
        },[pets]
    )

    const handleFavouritesState = (petId) => {
      const newPets = [...pets]
      console.log('newPets',{newPets,petId})
      const petToEditIndex =  newPets.findIndex(p=> p.id === petId )
      const petFavouritesState = newPets[petToEditIndex].favourites 
      newPets[petToEditIndex].favourites  = !petFavouritesState
      setPets(newPets)
      localStorage.setItem('pets',JSON.stringify(newPets))
    }
   
    return (
        <Container fluid>


            {

petContent.length &&  petContent.map(
    
    (petsSlices) => 
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:'3%',paddingLeft:'3%',paddingRight:'5%'}}> 
        {
            petsSlices.filter(p => favouritesMode ? p.favourites : p ).map(({shortDesc,favourites,photo,id},idx) =>  
            <Pet  
            changeFavouritesState={handleFavouritesState.bind(this,id)}
            goToPetDetails={()=>{history.push(`pet/${id}`)}}
            name={shortDesc}
            photo={photo}
            favourites={favourites}
            key={idx.toString()}
            />
            )
        }
    </div>
)

}
            

        </Container>
    )
}

export default Pets
