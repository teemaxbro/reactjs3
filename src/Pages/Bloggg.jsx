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
    <div className= 'flex p-8 bg-blue-500 items-center justify-center h-screen w-full'>
      <div className='w-full sm:w-[70%] md:w-[65%] lg:w-[50%] xl:w-[45%] 2xl:w-[50%]'>
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
    </div>
  );
}

export default Bloggg