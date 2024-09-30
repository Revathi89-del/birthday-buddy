import React from 'react'
import Person from './Person';
const List = ({people}) => {
   
  return (
   people.map((person)=>{
    return<Person name={person.name} age={person.age} image={person.image} key={person.id}/>
   })
  )
}

export default List