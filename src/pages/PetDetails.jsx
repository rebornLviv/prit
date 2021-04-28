import React, { useMemo } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router'
import './styles.scss'


export function PetDetails() {
    const {id} = useParams()
    const pet = useMemo(
        () => {
          const petArray  = JSON.parse(localStorage.getItem('pets')) 
          console.log('pet Array',petArray)
          const result = petArray.find( pet => pet.id == id)
          return result
        },[id]
    )
    console.log('url params',id)
    console.log('pet',pet)
    if(pet)
    return (
        < >
         <div id="hello">
      <img id="dog2" src={pet.photo} width="500px"/>
    <div id="maininfo">
      <h5>Кличка: {pet.name}<br/><br/>
      Стать: {pet.sex}<br/><br/>
      Вік: {pet.age}<br/><br/>
        Розташування: {pet.location}н<br/><br/>
    Стерилізація: {pet.sterelizated}<br/><br/>
	Вид тварини: {pet.petType}<br/></h5>
      </div>
  </div>
  
  <div id="hello2">
  <strong><h3>Про тварину:</h3></strong>
  <h5>{pet.details}</h5>
  </div>
   
   <div id="person">
   
      <div id="photo">
    <img src={pet.owner.photo} />
    </div>
      
    <div id="personinfo">
    
       <div className="dani">
        <strong>{pet.owner.name}</strong>
       </div>
       
       <div className="dani">
        <strong>{pet.owner.phone}</strong>
       </div>
       
       <div className="dani">
        <strong>{pet.owner.email}</strong>
       </div>
       
       <div className="dani" id="dani1">
        <strong>Про користувача</strong>
       </div>
    </div>
   
   <div id="message">
     <strong> Написати повідомлення</strong>
   </div>
   
   </div>  
        </>
    )
    else return <div/>
}

