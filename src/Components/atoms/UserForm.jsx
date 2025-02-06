import React from 'react'

const UserForm = ({
    handleSubmission,
    name,
    setName,
    age,
    setAge,
    description,
    setDescription,
}) => {
    
 return (
    (<form action = '' onSubmit = {handleSubmission} className="formClass">
        <div className='form-group'>
           <label htmlFor='name'>Name</label>
           <input name='name' type="text" placeholder='Enter your UserName' value={name} onChange={(e)=>{
              setName(e.target.value);
           }}/>
        </div>
        <div className='form-group'>
           <label htmlFor='description'>Description</label>
           <textarea name="description" rows={5} value={description} onChange={(e)=>{
             setDescription(e.target.value)
           }}></textarea>
        </div>
        <div className='form-group'>
           <label htmlFor='age'>Age</label>
           <input type="number" value={age} placeholder='Age' onChange={(e)=> {
             setAge(e.target.value)
           }}/>
        </div>
        <button className='btn' type='submit'>Submit</button>
      </form>
      )
  )
}

export default UserForm