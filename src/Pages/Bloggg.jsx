import React, { useState } from 'react'
import Usercard from '../Components/atoms/Usercard';
import UserForm from '../Components/atoms/UserForm';

const Bloggg = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('0')
    const [description, setDescription] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false)
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormSubmitted(true)
    }

  return (
    <div className='formContainer'>
       {formSubmitted === false ? (
         <UserForm
           handleSubmission = {handleSubmit}
           name= {name}
           setName = {setName}
           age = {age}
           setAge = {setAge}
           description = {description}
           setDescription = {setDescription}
        />
       )
         : (<Usercard userName={name} userAge={age} userDescription={description}/>)} 
        
        
    </div>
  );
}

export default Bloggg