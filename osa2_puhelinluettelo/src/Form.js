import React from 'react'

const Form = ( {addName, handleNameChange, handleNumberChange, newName, newNumber} ) => {
    return(
        <form onSubmit={addName}>
        <div>
          nimi: <input 
          value = {newName}
          onChange={handleNameChange}/>
        </div>
        <div>
          numero:<input 
          value = {newNumber}
          onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
    )
}



export default Form